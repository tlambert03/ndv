import numpy

import ndv

img = numpy.zeros((256, 256, 3), dtype=numpy.uint8)

for x in range(256):
    for y in range(256):
        img[x, y, 0] = x
        img[x, y, 1] = y
        img[x, y, 2] = 255 - x

img = img.transpose(2, 0, 1)

ndv.imshow(img, channel_mode="rgb")
