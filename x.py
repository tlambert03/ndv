from rich import print

from ndv.v2.model import ArrayDisplayModel, LUTModel

a = ArrayDisplayModel(
    luts={
        None: LUTModel(cmap="viridis"),
        0: LUTModel(cmap="gray"),
    },
    channel_axis="z",
)

print(a)
a.visible_axes = ("z", -2, -1)
print(a)


# js = a.model_dump_json()
# # print(js)
# d = ArrayDisplayModel.model_validate_json(js)
# print(d)
