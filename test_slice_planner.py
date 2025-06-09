#!/usr/bin/env python3
"""Simple test script to verify SlicePlanner works."""

import numpy as np

from ndv.models import ArrayDisplayModel, DataWrapper
from ndv.models._slice_planner import SlicePlanner


def test_basic_slice_planning():
    """Test basic slice planning functionality."""
    # Create test data
    data = np.random.rand(10, 8, 64, 64)
    wrapper = DataWrapper.create(data)

    # Create basic display model
    display_model = ArrayDisplayModel()

    # Create a slice plan
    plan = SlicePlanner.create_plan(
        display_model=display_model, data_wrapper=wrapper, generation=1
    )

    print("✅ SlicePlan created successfully!")
    print(f"  - Visible axes: {plan.visible_axes}")
    print(f"  - Channel axis: {plan.channel_axis}")
    print(f"  - Channel mode: {plan.channel_mode}")
    print(f"  - Generation: {plan.generation}")
    print(f"  - Transpose order: {plan.transpose_order}")
    print(f"  - Expected channels: {plan.expected_channels}")
    print(f"  - Index keys: {list(plan.index.keys())}")

    return plan


if __name__ == "__main__":
    try:
        plan = test_basic_slice_planning()
        print("\n🎉 SlicePlanner test PASSED!")
    except Exception as e:
        print(f"\n❌ SlicePlanner test FAILED: {e}")
        import traceback

        traceback.print_exc()
