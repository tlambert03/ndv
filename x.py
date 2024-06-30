from __future__ import annotations

import dask.array as da

# import numpy as np
# from dask.array.core import map_blocks
# def _dask_block(block_id: tuple[int, ...]) -> np.ndarray | None:
#     if isinstance(block_id, np.ndarray):
#         return None
#     data = np.random.randint(0, 255, size=full_shape[-chunked_dims:], dtype=dtype)
#     return data[(None,) * len(full_shape[:-chunked_dims])]
# full_shape = (100, 2, 256, 256, 256)
# chunked_dims = 3
# chunksize = 64
# dtype = np.uint8
# chunks = [(1,) * x for x in full_shape[:-chunked_dims]]
# chunks += [((chunksize,) * (x // chunksize)) for x in full_shape[-chunked_dims:]]
# dask_arr = map_blocks(_dask_block, chunks=chunks, dtype=dtype)
import zarr
from qtpy.QtWidgets import QApplication
from rich import print  # noqa: F401

from ndv.v2 import NDViewer
from ndv.v2.model import ArrayDisplayModel, LUTModel

#
dataset = zarr.open("https://s3.embl.de/i2k-2020/platy-raw.ome.zarr", mode="r")
multiscale_data = [da.from_zarr(dataset[f"s{level}"]) for level in range(10)]


ArrayDisplayModel.model_json_schema()
model = ArrayDisplayModel(
    luts={
        None: LUTModel(cmap="gray"),
        0: LUTModel(cmap="green", visible=False),
        1: LUTModel(cmap="magenta"),
    },
    channel_axis=None,
)

m2 = ArrayDisplayModel.model_validate_json(model.model_dump_json())
if m2 != model:
    breakpoint()

app = QApplication([])
viewer = NDViewer(data=dask_arr, model=model)
# viewer.show()
# app.exec()
