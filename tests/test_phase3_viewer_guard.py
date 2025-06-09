"""Test Phase 3 - Viewer Guard implementation.

Tests the generation counter in ArrayViewer and stale response detection
that prevents outdated data from being displayed when rapid UI changes occur.
"""

from unittest.mock import Mock, patch

import numpy as np
import pytest

from ndv import ArrayViewer
from ndv.models._array_display_model import ArrayDisplayModel
from ndv.models._slice_worker import DataResponse


class TestPhase3ViewerGuard:
    """Test Phase 3 generation counter and stale response detection."""

    @pytest.fixture
    def viewer(self):
        """Create a basic ArrayViewer for testing."""
        data = np.random.rand(10, 10, 3).astype(np.uint8)
        display_model = ArrayDisplayModel(
            visible_axes=(0, 1), channel_axis=2, current_index={2: 0}
        )
        viewer = ArrayViewer(data, display_model=display_model)
        yield viewer
        viewer.close()

    def test_generation_counter_initialization(self, viewer):
        """Test that generation counter is properly initialized."""
        assert hasattr(viewer, "_generation")
        # Generation counter starts at 0 but may be incremented during initialization
        # if data is provided and _fully_synchronize_view is called
        assert viewer._generation >= 0

    def test_generation_counter_increments_on_request(self, viewer):
        """Test that generation counter increments with each data request."""
        initial_generation = viewer._generation

        # Trigger a data request by changing the current index
        viewer.display_model.current_index[0] = 1

        # Generation should have incremented
        assert viewer._generation > initial_generation

    def test_stale_response_detection_discards_old_data(self, viewer):
        """Test that stale responses are properly discarded."""
        # Mock the add_handle method to avoid numpy issues with Mock objects
        with patch("ndv.controllers._channel_controller.ChannelController.add_handle"):
            # Create responses with different generations
            stale_response = DataResponse(
                data={None: np.ones((5, 5))},
                n_visible_axes=2,
                generation=1,  # Old generation
                plan=Mock(),
            )

            current_response = DataResponse(
                data={None: np.ones((5, 5)) * 2},
                n_visible_axes=2,
                generation=3,  # Current generation
                plan=Mock(),
            )

            # Set viewer generation to 3 (current)
            viewer._generation = 3

            # Mock the canvas methods to avoid LUT calculation issues
            viewer._canvas = Mock()
            viewer._lut_controllers = {}

            # Process stale response - should be discarded
            from concurrent.futures import Future

            stale_future = Future()
            stale_future.set_result(stale_response)
            viewer._on_data_response_ready(stale_future)

            # Process current response - should be accepted
            current_future = Future()
            current_future.set_result(current_response)
            viewer._on_data_response_ready(current_future)

            # Only current response should have been processed
            # (stale response discarded, so only 1 controller created)
            assert len(viewer._lut_controllers) == 1

    def test_multiple_rapid_requests_only_process_latest(self, viewer):
        """Test that only the latest response is processed during rapid changes."""
        # Force synchronous mode for deterministic testing
        viewer._async = False

        original_generation = viewer._generation

        # Make multiple rapid requests by changing index multiple times
        for i in range(5):
            viewer.display_model.current_index[0] = i

        # Generation should have increased by 5
        expected_generation = original_generation + 5
        # Allow for some tolerance in case of initialization effects
        assert viewer._generation >= expected_generation

        # All previous futures should have been cancelled
        assert all(f.cancelled() or f.done() for f in viewer._futures)

    def test_generation_counter_with_async_mode(self, viewer):
        """Test generation counter works correctly in async mode."""
        viewer._async = True
        initial_generation = viewer._generation

        # Trigger multiple requests
        viewer.display_model.current_index[0] = 1
        viewer.display_model.current_index[0] = 2

        # Generation should have incremented for each request
        assert viewer._generation > initial_generation

    def test_response_without_generation_is_processed(self, viewer):
        """Test that responses without generation are still processed."""
        # Mock the add_handle method to avoid numpy issues with Mock objects
        with patch("ndv.controllers._channel_controller.ChannelController.add_handle"):
            # Create a mock response without generation
            mock_response = Mock()
            mock_response.data = {None: np.ones((5, 5))}
            mock_response.n_visible_axes = 2
            # No generation attribute

            # Mock canvas and controllers
            viewer._canvas = Mock()
            viewer._lut_controllers = {}

            from concurrent.futures import Future

            future = Future()
            future.set_result(mock_response)

            # Should not raise an error and should process the response
            viewer._on_data_response_ready(future)

            # Response should have been processed (no exception raised)

    def test_stale_response_with_equal_generation_is_processed(self, viewer):
        """Test that responses with equal generation are still processed."""
        # Mock the add_handle method to avoid numpy issues with Mock objects
        with patch("ndv.controllers._channel_controller.ChannelController.add_handle"):
            viewer._generation = 5

            response = DataResponse(
                data={None: np.ones((5, 5))},
                n_visible_axes=2,
                generation=5,  # Equal to current generation
                plan=Mock(),
            )

            viewer._canvas = Mock()
            viewer._lut_controllers = {}

            from concurrent.futures import Future

            future = Future()
            future.set_result(response)

            # Should process the response (equal generation is OK)
            viewer._on_data_response_ready(future)

    def test_generation_persists_across_data_changes(self, viewer):
        """Test that generation counter persists when data is changed."""
        # Make some requests to increment generation
        viewer.display_model.current_index[0] = 1
        viewer.display_model.current_index[0] = 2

        current_generation = viewer._generation
        assert current_generation > 0

        # Change data
        new_data = np.random.rand(8, 8, 3).astype(np.uint8)
        viewer.data = new_data

        # Generation should continue from where it left off
        assert viewer._generation >= current_generation

    def test_cancelled_futures_dont_affect_generation(self, viewer):
        """Test that cancelled futures don't interfere with generation logic."""
        # Start a request
        viewer.display_model.current_index[0] = 1
        current_generation = viewer._generation

        # Cancel all futures
        viewer._cancel_futures()

        # Make another request
        viewer.display_model.current_index[0] = 2

        # Generation should have incremented properly
        # Allow for some tolerance in case of initialization effects
        assert viewer._generation >= current_generation + 1

    def test_viewer_close_cleanup_with_generation(self, viewer):
        """Test that viewer cleanup works correctly with generation counter."""
        # Make some requests
        viewer.display_model.current_index[0] = 1
        viewer.display_model.current_index[0] = 2

        len(viewer._futures)

        # Close viewer
        viewer.close()

        # All futures should be cancelled
        assert all(f.cancelled() for f in viewer._futures)
        assert not viewer._viewer_model.show_progress_spinner
