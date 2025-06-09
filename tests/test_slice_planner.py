"""Tests for the SlicePlanner planning layer."""

import numpy as np
import pytest

from ndv.models import ArrayDisplayModel, ChannelMode, DataWrapper
from ndv.models._slice_planner import SlicePlan, SlicePlanner


class TestSlicePlanner:
    """Test suite for SlicePlanner."""

    def test_create_plan_basic(self):
        """Test creating a basic slice plan."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel()

        plan = SlicePlanner.create_plan(display_model, wrapper, generation=1)

        assert isinstance(plan, SlicePlan)
        assert plan.wrapper is wrapper
        assert plan.generation == 1
        assert plan.channel_mode == ChannelMode.GRAYSCALE
        assert plan.visible_axes == (2, 3)  # Default for 4D data
        assert plan.channel_axis is None  # Default for grayscale

    def test_create_plan_with_channel_axis(self):
        """Test creating a plan with channel axis."""
        data = np.random.rand(64, 64, 3)  # HWC format
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            channel_axis=2, channel_mode=ChannelMode.COMPOSITE, visible_axes=(0, 1)
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)

        assert plan.channel_axis == 2
        assert plan.channel_mode == ChannelMode.COMPOSITE
        assert plan.visible_axes == (0, 1)

    def test_plan_immutability(self):
        """Test that SlicePlan is immutable."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel()

        plan = SlicePlanner.create_plan(display_model, wrapper)

        # Should not be able to modify frozen dataclass
        with pytest.raises(AttributeError):
            plan.generation = 999

    def test_plan_derived_fields(self):
        """Test that derived fields are computed correctly."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel()

        plan = SlicePlanner.create_plan(display_model, wrapper)

        # Check derived fields are computed
        assert plan.transpose_order == (2, 3, 0, 1)  # visible + other axes
        assert len(plan.visible_axes) == 2  # Check visible axes count instead
        assert plan.expected_channels == (None,)  # Grayscale mode

    def test_rgba_channel_mode(self):
        """Test RGBA channel mode planning."""
        data = np.random.rand(64, 64, 4)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            channel_axis=2, channel_mode=ChannelMode.RGBA, visible_axes=(0, 1)
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)

        assert plan.channel_mode == ChannelMode.RGBA
        assert plan.expected_channels == ("RGB",)

    def test_composite_channel_mode(self):
        """Test composite channel mode planning."""
        data = np.random.rand(64, 64, 3)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            channel_axis=2, channel_mode=ChannelMode.COMPOSITE, visible_axes=(0, 1)
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)

        assert plan.channel_mode == ChannelMode.COMPOSITE
        assert plan.expected_channels == (0, 1, 2)

    def test_normalize_index(self):
        """Test index normalization."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)

        # Test with mixed positive/negative/string axes
        current_index = {0: 5, -1: slice(None), 2: 10}
        normalized = SlicePlanner._normalize_index(current_index, wrapper)

        assert isinstance(normalized, dict)
        assert all(isinstance(k, int) for k in normalized.keys())
        assert normalized[0] == 5
        assert normalized[3] == slice(None)  # -1 becomes 3 for 4D data
        assert normalized[2] == 10

    def test_normalize_visible_axes(self):
        """Test visible axes normalization."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)

        # Test with negative axes
        visible_axes = (-2, -1)
        normalized = SlicePlanner._normalize_visible_axes(visible_axes, wrapper)

        assert normalized == (2, 3)  # -2,-1 become 2,3 for 4D data

    def test_normalize_channel_axis(self):
        """Test channel axis normalization."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)

        # Test None
        assert SlicePlanner._normalize_channel_axis(None, wrapper) is None

        # Test negative axis
        normalized = SlicePlanner._normalize_channel_axis(-1, wrapper)
        assert normalized == 3  # -1 becomes 3 for 4D data

        # Test positive axis
        normalized = SlicePlanner._normalize_channel_axis(1, wrapper)
        assert normalized == 1

    def test_data_wrapper_none_raises_error(self):
        """Test that None data wrapper raises ValueError."""
        display_model = ArrayDisplayModel()

        with pytest.raises(ValueError, match="Data wrapper cannot be None"):
            SlicePlanner.create_plan(display_model, None)

    def test_slice_conversion(self):
        """Test that integer indices get converted to slices."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)
        display_model = ArrayDisplayModel(
            current_index={0: 5, 1: 3}  # Integer indices
        )

        plan = SlicePlanner.create_plan(display_model, wrapper)

        # Integer indices should be converted to slices to preserve dimensions
        assert plan.index[0] == slice(5, 6)
        assert plan.index[1] == slice(3, 4)
        # Visible axes should remain as full slices
        assert plan.index[2] == slice(None)
        assert plan.index[3] == slice(None)


class TestSlicePlan:
    """Test suite for SlicePlan."""

    def test_plan_creation(self):
        """Test SlicePlan creation."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)

        plan = SlicePlan(
            wrapper=wrapper,
            index={0: slice(5, 6), 1: slice(None)},
            visible_axes=(2, 3),
            channel_axis=None,
            channel_mode=ChannelMode.GRAYSCALE,
            generation=42,
        )

        assert plan.wrapper is wrapper
        assert plan.generation == 42
        assert plan.channel_mode == ChannelMode.GRAYSCALE

    def test_post_init_fields(self):
        """Test that __post_init__ computes derived fields."""
        data = np.random.rand(10, 8, 64, 64)
        wrapper = DataWrapper.create(data)

        plan = SlicePlan(
            wrapper=wrapper,
            index={},
            visible_axes=(1, 2),
            channel_axis=0,
            channel_mode=ChannelMode.COMPOSITE,
        )

        # Check derived fields
        assert hasattr(plan, "transpose_order")
        assert hasattr(plan, "expected_channels")
        assert len(plan.visible_axes) == 2  # Check visible axes count instead
        assert plan.transpose_order == (1, 2, 0, 3)  # visible + other
