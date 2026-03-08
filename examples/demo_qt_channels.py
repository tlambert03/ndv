"""Demo of the Qt channel selector and scrollable LUT area.

Usage:
    uv run python examples/demo_qt_channels.py

With 10 channels, you should see:
    - A "Channel Display Options" dropdown above the LUT controls
    - The LUT area scrolls if it exceeds ~200px height
    - You can show/hide individual channels via the dropdown
    - Mode changes (composite -> grayscale -> composite) preserve selections
"""

from __future__ import annotations

import numpy as np

import ndv

data = np.random.randint(0, 255, (10, 64, 64), dtype=np.uint8)
ndv.imshow(data, channel_axis=0)
