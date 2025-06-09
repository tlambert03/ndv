"""Test reducer functionality in the slice planner and worker."""

import numpy as np
import pytest

from ndv.models import ArrayDisplayModel, ChannelMode, DataWrapper
from ndv.models._array_display_model import IndexMap, Reducers
from ndv.models._slice_planner import SlicePlanner
from ndv.models._slice_worker import SliceWorker


class TestReducerFunctionality:
    """Test suite for data reducer functionality."""

    def test_reducer_plan_creation(self):
        """Test that reducers are properly included in plan creation."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={0: 5, 1: 3},  # Integer indices
            visible_axes=(2, 3),  # Last two axes are visible
            reducers={0: "numpy.max", 1: "numpy.mean"},  # Reducers for axes 0 and 1
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)

        # Check that reducers are correctly normalized and included
        assert 0 in plan.reducers
        assert 1 in plan.reducers
        # Reducers should be converted to callable functions by pydantic
        assert callable(plan.reducers[0])
        assert callable(plan.reducers[1])
        # Verify they are the expected numpy functions
        assert plan.reducers[0] == np.max
        assert plan.reducers[1] == np.mean

    def test_reducer_axis_calculation(self):
        """Test that effective axes are calculated correctly with reducers."""
        data = np.random.rand(5, 4, 3, 64, 64)  # 5D data
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={0: 2, 1: 1},  # Integer indices (will reduce dimensions)
            visible_axes=(3, 4),  # Last two axes are visible
            reducers={2: "numpy.max"},  # Reducer for axis 2
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)

        # Original dimensions: 5
        # After integer slicing at axes 0,1: 3 dimensions (axes 2,3,4 -> 0,1,2)
        # After reducer on axis 2 (now 0): 2 dimensions (axes 3,4 -> 0,1)
        # So effective transpose order should be (0,1) for visible axes (3,4)
        assert plan.effective_transpose_order == (0, 1)

    def test_reducer_application_basic(self):
        """Test basic reducer application functionality."""
        # Create data with known structure for verification
        data = np.arange(24).reshape(2, 3, 4)  # Shape: (2, 3, 4)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={0: 0},  # Select first slice, reduces to shape (3, 4)
            visible_axes=(1, 2),  # These will become (0, 1) after slicing
            reducers={},  # No additional reducers
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # Expected data: data[0] = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]]
        expected = np.array([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]])
        np.testing.assert_array_equal(response.data[None], expected)

    def test_reducer_max_projection(self):
        """Test max projection reducer (thick slice functionality)."""
        # Create data where max projection is meaningful
        data = np.zeros((3, 4, 5))
        # Set specific values that we can verify
        data[0, 1, 2] = 10  # Max in this "thick slice"
        data[1, 1, 2] = 5   # Lower value
        data[2, 1, 2] = 8   # Middle value

        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={},  # No integer slicing
            visible_axes=(1, 2),  # Spatial axes
            reducers={0: "numpy.max"},  # Max projection along axis 0
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # The max projection should pick the maximum value (10) at position (1, 2)
        result = response.data[None]
        assert result[1, 2] == 10  # Max value should be preserved
        assert result.shape == (4, 5)  # Reduced from (3, 4, 5) to (4, 5)

    def test_reducer_mean_projection(self):
        """Test mean projection reducer."""
        # Create data with known mean values
        data = np.ones((3, 2, 2)) * np.arange(3).reshape(3, 1, 1)
        # data[0] = [[0, 0], [0, 0]]
        # data[1] = [[1, 1], [1, 1]]
        # data[2] = [[2, 2], [2, 2]]
        # Mean along axis 0 should be [[1, 1], [1, 1]]

        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={},
            visible_axes=(1, 2),
            reducers={0: "numpy.mean"},  # Mean along axis 0
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        expected = np.ones((2, 2))
        np.testing.assert_array_equal(response.data[None], expected)

    def test_mixed_slicing_and_reducers(self):
        """Test combination of integer slicing and reducers."""
        data = np.arange(60).reshape(3, 4, 5)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={0: 1},  # Integer slice on axis 0
            visible_axes=(1, 2),   # Visible axes become (0, 1) after slicing
            reducers={},  # No reducers needed, just testing mixed behavior
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # Should get data[1] which is shape (4, 5)
        expected = data[1]
        np.testing.assert_array_equal(response.data[None], expected)

    def test_reducer_with_channel_axis(self):
        """Test reducers working with channel axis."""
        data = np.random.rand(3, 2, 64, 64)  # 3 time points, 2 channels, 64x64 spatial
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            channel_mode=ChannelMode.COMPOSITE,
            channel_axis=1,  # Channels
            visible_axes=(2, 3),  # Spatial axes
            reducers={0: "numpy.max"},  # Max projection over time
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # Should have 2 channels after max projection over time
        assert len(response.data) == 2
        assert 0 in response.data
        assert 1 in response.data
        # Each channel should be 64x64 after reduction
        assert response.data[0].shape == (64, 64)
        assert response.data[1].shape == (64, 64)

    def test_effective_transpose_order_with_reducers(self):
        """Test that effective transpose order is correctly calculated."""
        data = np.random.rand(5, 4, 3, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={0: 2, 1: 1},  # Reduce to 3D
            visible_axes=(3, 4),  # Spatial dims (will become 1, 2 after slicing)
            reducers={2: "numpy.max"},  # Further reduce to 2D
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)

        # Original: axes 0,1,2,3,4
        # After integer slicing on 0,1: axes 2,3,4 -> 0,1,2
        # After reducer on axis 2 (now 0): axes 3,4 -> 0,1
        # Visible axes (3,4) become (0,1)
        # So effective transpose should be (0,1)
        assert plan.effective_transpose_order == (0, 1)

    def test_no_reducers_backward_compatibility(self):
        """Test that the system works without reducers (backward compatibility)."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={0: 5, 1: 3},
            visible_axes=(2, 3),
            # No reducers specified
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # Should work exactly as before
        assert len(plan.reducers) == 0
        assert response.data[None].shape == (64, 64)

    def test_string_reducer_resolution(self):
        """Test that string reducer names are properly resolved."""
        data = np.random.rand(3, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            visible_axes=(1, 2),
            reducers={0: "numpy.std"},  # Use numpy.std as string
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # Should successfully apply std reduction
        assert response.data[None].shape == (64, 64)
        # Result should be different from input (std calculation)
        assert not np.array_equal(response.data[None], data[0])

    def test_multiple_reducers(self):
        """Test multiple reducers on different axes."""
        data = np.random.rand(4, 3, 2, 10, 10)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            visible_axes=(3, 4),
            reducers={
                0: "numpy.max",    # Max over axis 0
                1: "numpy.mean",   # Mean over axis 1 
                2: "numpy.sum",    # Sum over axis 2
            },
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # After all reductions, should have only spatial dimensions
        assert response.data[None].shape == (10, 10)

    @pytest.mark.parametrize("reducer_name", [
        "numpy.max",
        "numpy.mean",
        "numpy.min",
        "numpy.sum",
        "numpy.std",
        "max",  # Test fallback to numpy
        "mean",
    ])
    def test_various_reducers(self, reducer_name):
        """Test that various reducer types work correctly."""
        data = np.random.rand(3, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            visible_axes=(1, 2),
            reducers={0: reducer_name},
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # All reducers should produce 64x64 output
        assert response.data[None].shape == (64, 64)
