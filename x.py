import numpy as np
from qtpy.QtWidgets import QApplication
from rich import print  # noqa: F401

from ndv.v2 import NDViewer
from ndv.v2.model import ArrayDisplayModel, LUTModel

ArrayDisplayModel.model_json_schema()
model = ArrayDisplayModel(
    luts={
        None: LUTModel(cmap="gray"),
        0: LUTModel(cmap="green"),
        1: LUTModel(cmap="magenta"),
    },
    channel_axis=None,
)

m2 = ArrayDisplayModel.model_validate_json(model.model_dump_json())
if m2 != model:
    breakpoint()

arr = np.random.rand(100, 2, 100, 100)
app = QApplication([])
viewer = NDViewer(data=arr, model=model)
# viewer.show()
# app.exec()
