"""
Used to obtain the ship and truck images from the CIFAR-10 dataset.

The `labels.csv` and the contents of `cifar-10-dataset` directory can be obtained by downloading the CIFAR-10
dataset from here - https://www.kaggle.com/c/cifar-10/data?select=test.7z
"""

import csv
from skimage.io import imread
from skimage.io import imsave

fields = []
rows = []
required_labels = ['ship', 'truck']


with open('labels.csv', 'r', newline='') as file:
    csvreader = csv.reader(file)
    # extracting field names through first row
    fields = next(csvreader)
  
    # extracting each data row one by one
    for row in csvreader:
        rows.append(row)

for i in range(0,2):
    # Procuring the images of a particular category in a directory of its own
    for row in rows:
        try:
            if(row[1] == required_labels[i]):
                img_path = 'cifar-10-dataset/' + (row[0]) + '.png'
                img = imread(img_path)
                imsave((required_labels[i]) + '/' + (row[0]) + '.png', img)
        except Exception as e:
            print(e)
            exit()

