"""Tests for the SliceWorker class.

Tests the worker pipeline phase of the NDV data pipeline:
User intent → SlicePlan → Worker → Response (generation-tagged) → View
"""

from dataclasses import FrozenInstanceError

import numpy as np
import pytest

from ndv.models import ArrayDisplayModel, ChannelMode, DataWrapper
from ndv.models._slice_planner import SlicePlanner
from ndv.models._slice_worker import DataResponse, SliceWorker


class TestSliceWorker:
    """Test suite for SliceWorker."""

    def test_process_plan_basic(self):
        """Test basic plan processing."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel()

        plan = SlicePlanner.create_plan(display_model, wrapper, generation=1)
        response = SliceWorker.process_plan(plan)

        assert isinstance(response, DataResponse)
        assert response.generation == 1
        assert response.plan is plan
        assert None in response.data  # Grayscale mode
        assert isinstance(response.data[None], np.ndarray)

    def test_process_plan_grayscale(self):
        """Test grayscale channel mode processing."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            channel_mode=ChannelMode.GRAYSCALE,
            current_index={0: 5, 1: 3},  # Select specific slices
        )

        plan = SlicePlanner.create_plan(display_model, wrapper, generation=2)
        response = SliceWorker.process_plan(plan)

        assert response.generation == 2
        assert None in response.data
        # Check that data was sliced correctly
        result = response.data[None]
        assert result.shape == (64, 64)  # Should be squeezed to 2D

    def test_process_plan_rgba(self):
        """Test RGBA channel mode processing."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            channel_mode=ChannelMode.RGBA,
            current_index={0: 5, 1: 3},
        )

        plan = SlicePlanner.create_plan(display_model, wrapper, generation=3)
        response = SliceWorker.process_plan(plan)

        assert response.generation == 3
        assert "RGB" in response.data
        result = response.data["RGB"]
        assert result.shape == (64, 64)  # Should be squeezed to 2D

    def test_process_plan_composite(self):
        """Test composite channel mode processing."""
        data = np.random.rand(10, 8, 3, 64, 64)  # 3 channels
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            channel_mode=ChannelMode.COMPOSITE,
            channel_axis=2,  # 3rd axis is the channel
            visible_axes=(3, 4),  # Last two axes are spatial
            current_index={0: 5, 1: 3},
        )

        plan = SlicePlanner.create_plan(display_model, wrapper, generation=4)
        response = SliceWorker.process_plan(plan)

        assert response.generation == 4
        assert len(response.data) == 3  # Should have 3 channels
        for i in range(3):
            assert i in response.data
            result = response.data[i]
            assert result.shape == (64, 64)  # Should be squeezed to 2D

    def test_process_plan_color_mode(self):
        """Test color channel mode processing."""
        data = np.random.rand(5, 4, 64, 64)  # 4 channels
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            channel_mode=ChannelMode.COLOR,
            channel_axis=1,  # 2nd axis is the channel
            visible_axes=(2, 3),  # Last two axes are spatial
            current_index={0: 2},
        )

        plan = SlicePlanner.create_plan(display_model, wrapper, generation=5)
        response = SliceWorker.process_plan(plan)

        assert response.generation == 5
        assert len(response.data) == 4  # Should have 4 channels
        for i in range(4):
            assert i in response.data
            result = response.data[i]
            assert result.shape == (64, 64)  # Should be squeezed to 2D

    def test_transpose_operation(self):
        """Test that transpose operation follows the planned order."""
        # Create data with distinctive shape
        data = np.arange(24).reshape(2, 3, 4, 1)  # Shape: (2, 3, 4, 1)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            visible_axes=(1, 2),  # Axes 1 and 2 are visible
            current_index={0: 0, 3: 0},  # Select first from axes 0 and 3
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # The transpose order should be (1, 2, 0, 3)
        # After slicing and squeezing, we should get shape (3, 4)
        result = response.data[None]
        assert result.shape == (3, 4)

        # Verify the transpose was applied correctly
        # Original data[0, :, :, 0] should match our result
        expected = data[0, :, :, 0]
        np.testing.assert_array_equal(result, expected)

    def test_generation_preservation(self):
        """Test that generation is preserved through processing."""
        data = np.random.rand(10, 10)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel()

        # Test with different generation values
        for gen in [0, 1, 42, 999]:
            plan = SlicePlanner.create_plan(display_model, wrapper, generation=gen)
            response = SliceWorker.process_plan(plan)
            assert response.generation == gen

    def test_data_integrity(self):
        """Test that data processing preserves values correctly."""
        # Use known data for verification
        data = np.arange(60).reshape(3, 4, 5)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={0: 1},  # Select middle slice
            visible_axes=(1, 2),
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        result = response.data[None]
        expected = data[1, :, :]  # Should match the middle slice
        np.testing.assert_array_equal(result, expected)

    def test_channel_axis_processing(self):
        """Test channel axis processing for composite mode."""
        # Create data with known values for each channel
        data = np.zeros((2, 3, 4, 4))
        for i in range(3):
            data[:, i, :, :] = i + 1  # Channel 0=1, Channel 1=2, Channel 2=3

        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            channel_mode=ChannelMode.COMPOSITE,
            channel_axis=1,
            visible_axes=(2, 3),
            current_index={0: 0},
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)
        response = SliceWorker.process_plan(plan)

        # Verify each channel has the expected values
        for i in range(3):
            result = response.data[i]
            expected_value = i + 1
            assert np.all(result == expected_value)


class TestDataResponse:
    """Test suite for DataResponse."""

    def test_dataresponse_creation(self):
        """Test DataResponse creation."""
        data = np.random.rand(10, 10)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel()
        plan = SlicePlanner.create_plan(display_model, wrapper, generation=1)

        response = DataResponse(
            data={None: np.ones((5, 5))},
            generation=1,
            plan=plan,
        )

        assert isinstance(response.data, dict)
        assert response.generation == 1
        assert response.plan is plan

    def test_dataresponse_immutability(self):
        """Test that DataResponse is immutable."""
        data = np.random.rand(10, 10)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel()
        plan = SlicePlanner.create_plan(display_model, wrapper)

        response = DataResponse(
            data={None: np.ones((5, 5))},
            generation=1,
            plan=plan,
        )

        # Should not be able to modify frozen dataclass
        with pytest.raises(FrozenInstanceError):
            response.generation = 999


if __name__ == "__main__":
    pytest.main([__file__])
