# Phase 4 - Decouple God-object - COMPLETED ✅

**Task**: Rename `_ArrayDataDisplayModel` → `ArraySliceController`, move axis heuristics to `DataWrapper`, and remove slice execution methods to create a cleaner model tree.

## Objectives Accomplished

✅ **Renamed the main class**
- Successfully renamed `_ArrayDataDisplayModel` → `ArraySliceController`
- Updated all imports and references in consuming code
- Updated docstring to reflect focused responsibility as controller for axis normalization and channel mode logic

✅ **Moved axis heuristics to DataWrapper**
- Verified `guess_channel_axis()` and `guess_z_axis()` methods are properly implemented in DataWrapper
- Confirmed ArrayViewer uses DataWrapper heuristics via `wrapper.guess_z_axis()` and `wrapper.guess_channel_axis()`
- Axis discovery logic is now properly separated from the god-object

✅ **Removed slice execution methods**
- Eliminated obsolete slice execution methods from ArraySliceController:
  - `current_slice_requests()` - old planning logic now in SlicePlanner
  - `request_sliced_data()` - old async execution now handled by ArrayViewer's new pipeline  
  - `process_request()` - old processing logic now in SliceWorker
- Cleaned up unused imports (`Iterator`, `Future`, `cast`, `_app`)
- Updated `__all__` exports from `"_ArrayDataDisplayModel"` to `"ArraySliceController"`

✅ **Updated primary consumer (ArrayViewer)**
- Modified ArrayViewer to import and instantiate `ArraySliceController` instead of `_ArrayDataDisplayModel`
- Confirmed ArrayViewer uses the new SlicePlanner/SliceWorker pipeline in `_request_data()` method
- All tests pass with the new integration

✅ **Fixed test suite compatibility**
- Updated async race condition tests to work with new SliceWorker pipeline
- Fixed recursion issue in `test_exception_in_data_processing_doesnt_break_viewer`
- All 7 async race condition tests now pass

✅ **Updated documentation references**
- Fixed comment references across multiple files to use new class name
- Updated references in slice worker, slice planner, and array view files

## Implementation Details

### Class Responsibility Separation

The refactor successfully eliminates the "god-object" pattern by clearly separating responsibilities:

- **ArraySliceController**: Focused on axis normalization helpers and channel mode logic
- **SlicePlanner**: Pure planning logic (Phase 1)  
- **SliceWorker**: Data slicing and processing (Phase 2)
- **ArrayViewer**: UI orchestration with generation counter for stale response detection (Phase 3)

### Architecture Benefits Achieved

1. **Single Responsibility Principle**: ArraySliceController now has a single, focused responsibility
2. **Better separation of concerns**: Slice execution is completely removed from the model layer
3. **Improved testability**: Eliminated complex async slice execution methods from the model
4. **Cleaner model tree**: The controller is no longer a "god-object" that violates SRP
5. **Ready for future phases**: The simplified controller is ready for API cleanup in Phase 5

### Code Changes Summary

**Modified Files:**
- `/Users/talley/dev/self/ndv/src/ndv/models/_data_display_model.py` - Renamed class, removed methods, updated imports/exports
- `/Users/talley/dev/self/ndv/src/ndv/controllers/_array_viewer.py` - Updated import and instantiation  
- `/Users/talley/dev/self/ndv/tests/test_async_race_conditions.py` - Fixed test to work with new pipeline and avoid recursion
- `/Users/talley/dev/self/ndv/src/ndv/views/bases/_array_view.py` - Updated comment reference
- `/Users/talley/dev/self/ndv/src/ndv/models/_slice_worker.py` - Updated comment reference
- `/Users/talley/dev/self/ndv/src/ndv/models/_slice_planner.py` - Updated comment reference

**Key Edits:**
1. **Class Rename**: `_ArrayDataDisplayModel` → `ArraySliceController` with updated docstring
2. **Method Removal**: Deleted 3 obsolete slice execution methods
3. **Import Cleanup**: Removed unused imports and updated exports
4. **Consumer Update**: ArrayViewer uses new class name and SlicePlanner/SliceWorker pipeline
5. **Test Fix**: Resolved recursion issue in async race condition test

## Technical Validation

```bash
# Core functionality verification
python -c "from ndv.models._data_display_model import ArraySliceController; print('✅ Import successful')"

# Verify axis heuristics are in DataWrapper  
python -c "
from ndv.models import DataWrapper
import numpy as np
rgb_data = np.random.rand(64, 64, 3)
wrapper = DataWrapper.create(rgb_data) 
print(f'✅ Channel axis guess: {wrapper.guess_channel_axis()}')
"

# Verify pipeline works end-to-end
python -c "
from ndv.models._slice_planner import SlicePlanner
from ndv.models._slice_worker import SliceWorker  
from ndv.models import ArrayDisplayModel, DataWrapper
import numpy as np
data = np.random.rand(10, 8, 64, 64)
wrapper = DataWrapper.create(data)
display_model = ArrayDisplayModel()
plan = SlicePlanner.create_plan(display_model, wrapper, generation=1)
response = SliceWorker.process_plan(plan)
print(f'✅ Pipeline works: generation={response.generation}')
"

# All tests pass
python -m pytest tests/test_async_race_conditions.py -v  # ✅ 7 passed
python -m pytest tests/test_models.py tests/test_controller.py -v  # ✅ 11 passed
```

## Integration Notes

The god-object has been successfully decoupled with **no breaking changes** to the public API:
- ArrayViewer continues to work exactly as before from the user's perspective
- All existing functionality is preserved through the new SlicePlanner/SliceWorker pipeline
- The refactor is backwards compatible and maintains all existing behavior
- Ready for Phase 5 API cleanup which can now proceed with confidence

## Next Steps (Phase 5 - API Clean-up)

With the god-object successfully decoupled, Phase 5 can proceed to:
1. Consolidate LUT logic (LutMap always has key `None`)
2. Deprecate duplicate `n_visible_axes` 
3. Further simplify the API now that responsibilities are properly separated

**Status**: Phase 4 Decouple God-object is **COMPLETE** and ready for Phase 5. ✅
