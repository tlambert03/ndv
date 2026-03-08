"""Demo for https://github.com/pyapp-kit/ndv/issues/203.

Usage:
    uv run --with wxPython python examples/demo_wx_channel_bug.py

Steps to reproduce:
    1. Observe ~10 channels in composite mode with LUT controls visible
    2. Switch channel mode dropdown to "Grayscale"
    3. Switch back to "Composite"
    4. Bug: all LUT controls disappear and don't come back
"""

from __future__ import annotations

import numpy as np

import ndv

data = np.random.randint(0, 255, (10, 64, 64), dtype=np.uint8)
ndv.imshow(data, channel_axis=0)
