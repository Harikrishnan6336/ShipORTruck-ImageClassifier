# Python script to separate training and validation data
import os
from skimage.io import imread
from skimage.io import imsave

required_labels = ['ship', 'truck']

for i in range(0,2):
    j = 0
    for file in os.listdir(required_labels[i]):
        j = j + 1 
        img_path =  (required_labels[i])  + '/' + (file)
        img = imread(img_path)
        # Separating the images for training and validation use and placing them in different directories. 
        if(j < 4001):
            imsave('dataset/train/'+ (required_labels[i])  + '/' + (file), img)
        else:
            imsave('dataset/valid/' +  (required_labels[i])  + '/' + (file), img)


