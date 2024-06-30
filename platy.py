from __future__ import annotations

from qtpy.QtWidgets import QApplication
from rich import print  # noqa: F401

from ndv.v2 import NDViewer

# model = ArrayDisplayModel(
#     luts={
#         None: LUTModel(cmap="gray"),
#         0: LUTModel(cmap="green", visible=False),
#         1: LUTModel(cmap="magenta"),
#     },
#     channel_axis=None,
# )

app = QApplication([])
viewer = NDViewer(data="https://s3.embl.de/i2k-2020/platy-raw.ome.zarr")
