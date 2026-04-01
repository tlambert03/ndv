# /// script
# [tool.marimo.runtime]
# auto_instantiate = false
# ///

import marimo

__generated_with = "0.22.0"
app = marimo.App(width="medium")


@app.cell
def _():
    from ndv import data, imshow

    return data, imshow


@app.cell
def _(data):
    # Load the example 3D cell dataset
    cells = data.cells3d()
    return (cells,)


@app.cell
def _(cells, imshow):
    # Display the dataset using ndv's imshow
    viewer = imshow(cells)
    viewer
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
