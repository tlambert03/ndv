# Phase 5: API Clean-up - COMPLETE

**Date:** 2024-12-19  
**Status:** ✅ COMPLETE  
**Previous Phase:** [Phase 4: Decouple God Object](./PHASE_4_DECOUPLE_GOD_OBJECT_COMPLETE.md)

## Overview

Phase 5 successfully completed the API clean-up objective by eliminating duplicate `n_visible_axes` fields and confirming that LUT consolidation was already properly implemented.

## Objectives Achieved

### ✅ 1. Deprecate Duplicate `n_visible_axes`

**Goal:** Establish a single source of truth for `n_visible_axes` by removing duplicate fields.

**Implementation:**
- **Single Source of Truth:** `ArrayDisplayModel.n_visible_axes` (computed property)
- **Removed Duplicates:**
  - `SlicePlan.n_visible_axes` field
  - `DataResponse.n_visible_axes` field

**Changes Made:**
- **`SlicePlan`** (`_slice_planner.py`): Removed `n_visible_axes` field and related computation in `__post_init__`
- **`DataResponse`** (`_slice_worker.py`): Removed `n_visible_axes` field from dataclass
- **`SliceWorker`** (`_slice_worker.py`): Updated to not pass `n_visible_axes` to DataResponse constructor
- **`ArrayViewer`** (`_array_viewer.py`): Updated to use `self.display_model.n_visible_axes` instead of `response.n_visible_axes`
- **Test Files:** Updated all test files to remove `n_visible_axes` parameters and assertions

### ✅ 2. Verify LUT Consolidation

**Goal:** Ensure `LutMap` always has a fallback `None` key.

**Verification:** Confirmed that `_default_luts()` in `ArrayDisplayModel` already implements this correctly:
```python
def _default_luts() -> LutMap:
    colors = ["green", "magenta", "cyan", "red", "blue", "yellow"]
    luts = ValidatedEventedDict[ChannelKey, LUTModel]()
    
    # Add numbered channel LUTs
    for i, color in enumerate(colors):
        luts[i] = LUTModel(cmap=color)
    
    # Always include fallback None key for grayscale mode
    luts[None] = LUTModel(cmap="gray")
    return luts
```

## Files Modified

### Core Implementation
- **`src/ndv/models/_slice_planner.py`** - Removed `n_visible_axes` field
- **`src/ndv/models/_slice_worker.py`** - Removed `n_visible_axes` field from DataResponse
- **`src/ndv/controllers/_array_viewer.py`** - Updated to use single source of truth

### Test Updates
- **`tests/test_slice_planner.py`** - Fixed tests to check `len(plan.visible_axes)` instead of `plan.n_visible_axes`
- **`tests/test_slice_worker.py`** - Removed `n_visible_axes` from DataResponse constructors and assertions
- **`tests/test_phase3_viewer_guard.py`** - Already correctly used `display_model.n_visible_axes`

## API Improvements

### Before Phase 5
```python
# Multiple sources of truth - confusing!
plan.n_visible_axes        # Duplicate in SlicePlan
response.n_visible_axes    # Duplicate in DataResponse  
display_model.n_visible_axes  # The actual source
```

### After Phase 5
```python
# Single source of truth - clear and consistent!
display_model.n_visible_axes  # Only source
len(plan.visible_axes)        # Alternative for plan context
```

## Testing

- **All 90 tests pass** ✅
- **10 tests skipped** (missing optional dependencies)
- **Zero failures** ✅

### Key Test Fixes
1. **Slice Planner Tests:** Updated to use `len(plan.visible_axes) == 2` instead of `plan.n_visible_axes == 2`
2. **Slice Worker Tests:** Removed `n_visible_axes` parameters from DataResponse constructors
3. **DataResponse Immutability:** Fixed to use correct exception type (`FrozenInstanceError`)

## Architectural Benefits

1. **Simplified API:** Eliminated duplicate `n_visible_axes` fields that caused confusion
2. **Single Source of Truth:** `ArrayDisplayModel.n_visible_axes` is now the authoritative source
3. **Consistent LUT Behavior:** Confirmed fallback `None` key always present for grayscale mode
4. **Cleaner Dependencies:** Removed unnecessary field passing between components

## Integration with Previous Phases

Phase 5 builds perfectly on the decoupled architecture from Phase 4:
- **SlicePlanner:** Now focused purely on planning logic without redundant state
- **SliceWorker:** Streamlined DataResponse without duplicate fields  
- **ArrayViewer:** Uses single source of truth for display logic
- **ArrayDisplayModel:** Confirmed as the authoritative display state manager

## Next Steps

Phase 5 completes the major structural improvements outlined in the NDV refactor plan. The codebase now has:

1. ✅ **Decoupled Architecture** (Phase 4)
2. ✅ **Clean API** (Phase 5)
3. ✅ **Single Source of Truth** for display state
4. ✅ **Consistent LUT Handling**

Future enhancements can build on this solid, clean foundation with confidence that the core architecture is well-structured and maintainable.

---

**Verification:** All tests pass, `n_visible_axes` duplication eliminated, LUT consolidation confirmed.
