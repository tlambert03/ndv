
# NDV Refactor Plan

This document captures the issues discovered in the current array‑view---

## 5 · Immediate Quick Wins

* ✅ **COMPLETED**: Fixed blank `Exception("")` in `_on_channel_mode_change()` method - replaced with descriptive `ValueError` explaining RGBA mode conflicts and suggesting solutions.
* Add `clear_cache()` call on `DataWrapper.axis_map` mutation.  
* Provide `cancel_pending_futures()` in viewer destructor to avoid thread
  leakage.  
* Ensure `_default_luts()` always inserts a fallback `None` key.ase and proposes a staged refactor.  
The aim is to regain **clear separation of concerns**, guarantee **safe
asynchronous updates**, and improve **maintainability** without breaking public
APIs.

---

## 1 · Core Problems

| Theme | Symptoms | Impact |
|-------|----------|--------|
| **“God‑object” `_ArrayDataDisplayModel`** | Holds axis normalisation, channel heuristics, slice planning **and** request execution | Violates SRP, makes testing & future changes risky |
| **Async races / stale frames** | UI state can change while a worker thread slices data | Flicker, wrong LUTs, shape errors, crashes |
| **Channel‑mode side‑effects** | `_on_channel_mode_change()` mutates unrelated state and raises a blank `Exception("")` | Hidden coupling, brittle behaviour |
| **Naming / duplication** | multiple `normed_*` helpers, duplicate `n_visible_axes`, duplicated LUT fallbacks | Confusion about authoritative source |
| **Inefficient per‑channel transpose** | Composite/Colour paths transpose **inside** a loop | O(n_channels) extra copies |
| **Un‑guarded signals** | `dims_changed` clears caches but pending requests still finish with old shapes | Potential index errors & memory leaks |
| **Weak typing & error handling** | heavy `cast()` use, blank exceptions, silent provider failures | Lost static checking, harder debugging |

---

## 2 · Architectural Direction

### 2.1 Establish a deterministic data pipeline

```
User intent  →  SlicePlan  →  Worker  →  Response (generation‑tagged)  →  View
```

* **SlicePlanner** (pure): derives an immutable `SlicePlan` from
  `ArrayDisplayModel` + `DataWrapper`.  
* **SliceWorker** (thread/async): executes `plan`, returns `DataResponse`
  carrying `plan.generation`.  
* **ArrayViewer** (controller): before applying a response, discards it if
  `response.plan.generation != self._generation`.

### 2.2 Separate responsibilities

| Layer | Responsibility |
|-------|----------------|
| **ArrayDisplayModel** | Immutable view state (visible axes, index, channel mode, LUT meta) |
| **SlicePlanner** | _Derivation_ only (no mutation) |
| **SliceWorker** | Data slicing & reduction |
| **ArrayViewer** | UI orchestration, generation counter, render |

`_ArrayDataDisplayModel` will be split: axis discovery helpers move to
`DataWrapper`, planning to `SlicePlanner`.

### 2.3 Improve type‑safety & clarity

* Replace blanket `cast()` with precise return types (`Index = int | slice`).  
* Use `@overload` for helpers returning 2‑ vs 3‑tuples.  
* Swap blank `Exception("")` for descriptive `ValueError`.  
* Harden provider loading: fail fast when neither Qt/Jupyter/Wx nor Vispy/Pygfx
  are usable.

### 2.4 Optimise hot paths

* Transpose **once**, then slice channels with `take()`.  
* Add `__slots__` to small, frequently‑instantiated data classes (`DataRequest`,
  `DataResponse`).  
* Cache transpose order in `SlicePlan`.

---

## 3 · Implementation Steps

| Phase | Tasks | Outcome |
|-------|-------|---------|
| **0 – Safety Net** | • Add integration test simulating rapid slider changes while heavy slices run | Red regression shield |
| **1 – Planning Layer** | • Create `SlicePlan` & `SlicePlanner`.<br>• Port logic from `_ArrayDataDisplayModel.current_slice_requests`. | Pure, testable planner |
| **2 – Worker Layer** | • Factor `process_request` into a standalone worker util.<br>• Tag responses with `generation`. | Deterministic async |
| **3 – Viewer Guard** | • Add `_generation` counter in `ArrayViewer`.<br>• Discard stale responses. | No stale frames |
| **4 – Decouple “God‑object”** | • Rename `_ArrayDataDisplayModel` → `ArraySliceController`.<br>• Move axis heuristics to `DataWrapper`.<br>• Remove slice execution. | Cleaner model tree |
| **5 – API Clean‑up** | • Consolidate LUT logic (`LutMap` always has key `None`).<br>• Deprecate duplicate `n_visible_axes`. | Simpler API |
| **6 – Performance Pass** | • Optimise transpose + channel loop.<br>• Add `__slots__` to dataclasses.<br>• Cancel pending futures on viewer close. | Leaner runtime |
| **7 – Documentation** | • Update developer guide with pipeline diagram.<br>• Document SlicePlan fields. | Lower onboarding cost |

---

## 4 · Long‑Term Roadmap

1. **Move DataWrapper family to its own package** – GUI‑agnostic core.  
2. **Generic plugin system for canvas & GUI providers** – remove hard‑coded
   env‑var dance.  
3. **Batch‑aware reducers** – allow GPU reduction kernels.  
4. **Streaming tiles** – pre‑fetch & cancel based on camera movement.

---

## 5 · Immediate Quick Wins

* Add `clear_cache()` call on `DataWrapper.axis_map` mutation.  
* Provide `cancel_pending_futures()` in viewer destructor to avoid thread
  leakage.  
* Ensure `_default_luts()` always inserts a fallback `None` key.
