#!/usr/bin/env python3
"""Example demonstrating the reducer functionality for thick-slice projections."""

import numpy as np

from ndv.models import ArrayDisplayModel, DataWrapper
from ndv.models._slice_planner import SlicePlanner
from ndv.models._slice_worker import SliceWorker


def test_thick_slice_max_projection():
    """Demonstrate max projection (thick slice) functionality."""
    print("=== Testing Thick-Slice Max Projection ===")
    
    # Create 3D data where we want max projection along one axis
    data = np.zeros((5, 64, 64))  # 5 slices, 64x64 spatial
    
    # Add some interesting features to different slices
    data[0, 20:30, 20:30] = 100  # Feature in first slice
    data[2, 30:40, 30:40] = 150  # Brighter feature in middle slice
    data[4, 10:20, 40:50] = 120  # Feature in last slice
    
    print(f"Original data shape: {data.shape}")
    print(f"Max values in each slice: {[data[i].max() for i in range(5)]}")
    
    # Create data wrapper
    wrapper = DataWrapper.create(data)
    
    # Create display model with max projection along axis 0
    display_model = ArrayDisplayModel(
        visible_axes=(1, 2),  # Show spatial dimensions
        reducers={0: "numpy.max"},  # Max projection along first axis
    )
    
    # Plan and execute the operation
    plan = SlicePlanner.create_plan(display_model, wrapper)
    response = SliceWorker.process_plan(plan)
    
    # Get the result
    result = response.data[None]
    print(f"Result shape after max projection: {result.shape}")
    print(f"Max value in result: {result.max()}")
    
    # Verify the max projection worked correctly
    expected_max = np.max(data, axis=0)
    np.testing.assert_array_equal(result, expected_max)
    print("✅ Max projection matches expected result!")
    
    # Check that the brightest feature (150) is preserved
    assert result.max() == 150, f"Expected max 150, got {result.max()}"
    print("✅ Brightest feature preserved in projection!")
    
    return result


def test_mean_projection_with_slicing():
    """Demonstrate mean projection combined with integer slicing."""
    print("\n=== Testing Mean Projection with Integer Slicing ===")
    
    # Create 4D data: time x channel x height x width
    data = np.random.rand(10, 3, 32, 32) * 100
    
    print(f"Original data shape: {data.shape}")
    
    wrapper = DataWrapper.create(data)
    
    # Select specific time point and take mean across channels
    display_model = ArrayDisplayModel(
        current_index={0: 5},  # Select time point 5
        visible_axes=(2, 3),   # Show spatial dimensions
        reducers={1: "numpy.mean"},  # Mean across channels
    )
    
    plan = SlicePlanner.create_plan(display_model, wrapper)
    response = SliceWorker.process_plan(plan)
    
    result = response.data[None]
    print(f"Result shape after slicing and mean reduction: {result.shape}")
    
    # Verify against manual calculation
    expected = np.mean(data[5], axis=0)  # Time slice 5, mean across channels
    np.testing.assert_array_almost_equal(result, expected)
    print("✅ Mean projection with slicing works correctly!")
    
    return result


def test_multiple_reducers():
    """Demonstrate multiple reducers on different axes."""
    print("\n=== Testing Multiple Reducers ===")
    
    # Create 5D data: batch x time x channel x height x width
    data = np.random.rand(2, 8, 3, 16, 16) * 100
    
    print(f"Original data shape: {data.shape}")
    
    wrapper = DataWrapper.create(data)
    
    # Apply different reducers to different axes
    display_model = ArrayDisplayModel(
        visible_axes=(3, 4),  # Show spatial dimensions only
        reducers={
            0: "numpy.max",   # Max across batch
            1: "numpy.mean",  # Mean across time
            2: "numpy.sum",   # Sum across channels
        },
    )
    
    plan = SlicePlanner.create_plan(display_model, wrapper)
    response = SliceWorker.process_plan(plan)
    
    result = response.data[None]
    print(f"Result shape after multiple reductions: {result.shape}")
    
    # Verify against manual calculation
    expected = data.max(axis=0).mean(axis=0).sum(axis=0)
    np.testing.assert_array_almost_equal(result, expected)
    print("✅ Multiple reducers work correctly!")
    
    return result


if __name__ == "__main__":
    print("🧪 Testing NDV Reducer Functionality\n")
    
    try:
        # Test 1: Basic max projection
        result1 = test_thick_slice_max_projection()
        
        # Test 2: Mean projection with slicing
        result2 = test_mean_projection_with_slicing()
        
        # Test 3: Multiple reducers
        result3 = test_multiple_reducers()
        
        print(f"\n🎉 All reducer tests passed!")
        print(f"✅ Thick-slice max projection: {result1.shape}")
        print(f"✅ Mean projection with slicing: {result2.shape}")
        print(f"✅ Multiple reducers: {result3.shape}")
        
    except Exception as e:
        print(f"\n❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
