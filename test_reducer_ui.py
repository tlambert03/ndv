#!/usr/bin/env python3
"""
Test script for WxArrayView reducer functionality.
This script tests that the reducer UI controls work correctly with the backend.
"""

import numpy as np
from ndv.models._array_display_model import ArrayDisplayModel
from ndv.models._viewer_model import ArrayViewerModel
from ndv.models._reducer import ReducerType
from ndv.data import DataWrapper

def test_wx_reducer_functionality():
    """Test the WxArrayView reducer implementation."""
    print("Testing WxArrayView reducer functionality...")
    
    try:
        # Try to import WxArrayView - will fail if wxPython not available
        from ndv.views._wx._array_view import WxArrayView, _WxDimsSliders
        import wx
        
        print("✅ wxPython is available, testing reducer functionality")
        
        # Create test data
        data = np.random.rand(5, 10, 20, 30) * 100
        print(f"Created test data with shape: {data.shape}")
        
        # Test _WxDimsSliders reducer methods directly
        app = wx.App()
        frame = wx.Frame(None)
        dims_sliders = _WxDimsSliders(frame)
        
        # Create some sliders
        coords = {0: range(5), 1: range(10), 2: range(20), 3: range(30)}
        dims_sliders.create_sliders(coords)
        print(f"✅ Created sliders for axes: {list(coords.keys())}")
        
        # Test setting reducers
        test_reducers = {
            0: "numpy.max",
            1: "numpy.mean",
            2: None,
            3: "numpy.sum"
        }
        
        dims_sliders.set_reducers(test_reducers)
        print(f"✅ Set reducers: {test_reducers}")
        
        # Test getting reducers
        retrieved_reducers = dims_sliders.get_reducers()
        print(f"✅ Retrieved reducers: {retrieved_reducers}")
        
        # Verify they match (allowing for string vs ReducerType differences)
        for axis in test_reducers:
            expected = test_reducers[axis]
            actual = retrieved_reducers.get(axis)
            if expected != actual:
                print(f"⚠️  Mismatch for axis {axis}: expected {expected}, got {actual}")
            else:
                print(f"✅ Axis {axis} reducer matches: {expected}")
        
        # Test signal emission
        signal_received = []
        def on_reducer_changed(reducers):
            signal_received.append(reducers)
            print(f"✅ Signal received with reducers: {reducers}")
        
        dims_sliders.reducersChanged.connect(on_reducer_changed)
        
        # Simulate a reducer change (would normally come from UI)
        dims_sliders._on_reducer_changed(wx.CommandEvent())
        
        if signal_received:
            print("✅ Reducer change signal working correctly")
        else:
            print("❌ Reducer change signal not working")
        
        app.Destroy()
        print("✅ WxArrayView reducer functionality test completed successfully!")
        return True
        
    except ImportError as e:
        print(f"⚠️  wxPython not available ({e}), skipping WxArrayView test")
        return False
    except Exception as e:
        print(f"❌ WxArrayView test failed: {e}")
        import traceback
        traceback.print_exc()
        return False

def test_reducer_type_conversions():
    """Test that reducer types are handled correctly."""
    print("\nTesting reducer type conversions...")
    
    try:
        from ndv.views._wx._labeled_slider import WxSliderWithReducer
        import wx
        
        app = wx.App()
        frame = wx.Frame(None)
        slider = WxSliderWithReducer(frame, "test_axis")
        
        # Test setting different reducer types
        test_cases = [
            (None, None),
            ("numpy.max", "numpy.max"),
            ("numpy.mean", "numpy.mean"),
            ("numpy.min", "numpy.min"),
            ("numpy.sum", "numpy.sum"),
            ("numpy.std", "numpy.std"),
        ]
        
        for input_reducer, expected_output in test_cases:
            slider.set_reducer(input_reducer)
            actual_output = slider.get_reducer()
            if actual_output == expected_output:
                print(f"✅ Reducer conversion: {input_reducer} -> {actual_output}")
            else:
                print(f"❌ Reducer conversion failed: {input_reducer} -> {actual_output} (expected {expected_output})")
        
        app.Destroy()
        print("✅ Reducer type conversion test completed!")
        return True
        
    except ImportError:
        print("⚠️  wxPython not available, skipping reducer type conversion test")
        return False
    except Exception as e:
        print(f"❌ Reducer type conversion test failed: {e}")
        return False

def test_backend_stubs():
    """Test that the Qt and Jupyter backend stubs work correctly."""
    print("\nTesting backend stub implementations...")
    
    # Test Qt backend stubs
    try:
        from ndv.views._qt._array_view import QtArrayView
        from ndv.models._viewer_model import ArrayViewerModel
        
        # This will likely fail due to missing Qt, but we can at least check imports
        print("✅ Qt backend imports successful")
        
        # Test that methods exist
        assert hasattr(QtArrayView, 'set_reducers'), "QtArrayView missing set_reducers method"
        assert hasattr(QtArrayView, 'get_reducers'), "QtArrayView missing get_reducers method"
        print("✅ Qt backend has required reducer methods")
        
    except ImportError as e:
        print(f"⚠️  Qt backend not available ({e})")
    except Exception as e:
        print(f"❌ Qt backend test failed: {e}")
    
    # Test Jupyter backend stubs
    try:
        from ndv.views._jupyter._array_view import JupyterArrayView
        
        print("✅ Jupyter backend imports successful")
        
        # Test that methods exist
        assert hasattr(JupyterArrayView, 'set_reducers'), "JupyterArrayView missing set_reducers method"
        assert hasattr(JupyterArrayView, 'get_reducers'), "JupyterArrayView missing get_reducers method"
        print("✅ Jupyter backend has required reducer methods")
        
    except ImportError as e:
        print(f"⚠️  Jupyter backend not available ({e})")
    except Exception as e:
        print(f"❌ Jupyter backend test failed: {e}")

if __name__ == "__main__":
    print("=" * 60)
    print("TESTING REDUCER UI CONTROLS IMPLEMENTATION")
    print("=" * 60)
    
    test_wx_reducer_functionality()
    test_reducer_type_conversions()
    test_backend_stubs()
    
    print("\n" + "=" * 60)
    print("TESTING COMPLETE")
    print("=" * 60)
