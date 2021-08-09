# 🚢Ship⚓ OR 🚚Truck🚒 -ImageClassifier

This project was built as part of my submittion to [TinkerHub Foundation](https://tinkerhub.org/) Practical AI Bootcamp Selection Task.


#### A Binary Image Classifier that can classify images as either Ship or Truck. User can call the API by a POST method with image in base64 string as an input data. The API return the predicted label(either SHIP or TRUCK).


## Problem Statement

Create a binary classifier to classify images of ships and trucks. Deploy the model and share links to code in GitHub and the API. 


### Brief Project Info

The dataset required for training the ML model was obtained from [CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html) dataset. Several python programs where used to automate the process of procuring the required images of ships and trucks from the CIFAR-10 dataset and the same can be found in [data](https://github.com/Harikrishnan6336/ShipORTruck-ImageClassifier/tree/main/data) directory. 4000 images where used for training and 1000 images where used for validation in each category. Some images where also procured for testing the trained model and they can be found [here](https://github.com/Harikrishnan6336/ShipORTruck-ImageClassifier/tree/main/data/test).

Binary Image classifier is built on PyTorch framework using CNN architecture. Since the training was RAM intensive, it was carried out in Google Colab and the jupyter notebook used for training and validation can be found [here](https://colab.research.google.com/drive/1qCNDIIqYz8S9UE5bHoh9HoHmZoHLcRp8?usp=sharing). The file [dataset.zip](https://github.com/Harikrishnan6336/ShipORTruck-ImageClassifier/blob/main/ML_model/dataset.zip) gets loaded into the notebook after running the first cell. This compressed file contain the data to be trained on. The Validation Loss, was found out and was compared with the number of epochs, using suitable plot diagrams drawn with matplotlib. Required Hypertuning of parameters was done by varying batch size, number of epochs and learning rate. The source code regarding the model can be found in [ML_model](https://github.com/Harikrishnan6336/ShipORTruck-ImageClassifier/tree/main/ML_model) folder.

The trained ML model service is also made available in the form of an API built on the micro-web framework Flask. The ML model along with the prediction script is incorporated into Flask and deployed onto Heroku after testing it locally. The deployed API is this : https://truckorship.herokuapp.com/. The API accepts a POST request with an image in the form of base64 string and returns the image label as predicted by the ML model.

The following script can be used to test the API and the same script can be found [here](https://colab.research.google.com/drive/1Nt0Iwav7Nkn5OWvD-KVrbpEuZCwRcDPa?usp=sharing)

```python
import base64
import requests

url = "https://truckorship.herokuapp.com/"

with open("<IMG_PATH_HERE>", "rb") as img_file:
    imgdata = base64.b64encode(img_file.read())

imgdata = imgdata.decode("utf-8")

response = requests.post(url , json = {"image":imgdata})

print(response.text.strip())
```

A minimal website is made with ReactJS where the user can input an image and then let the model predict whether it is SHIP or TRUCK. It is hosted in netlify and can be found [here](https://shiportruck.netlify.app/).

## Built With ❤️ and

* [Python3.6](https://docs.python.org/3.6/) - The programming langauge used preprocess data, train the model and build the API.
* [PyTorch](https://pytorch.org/) - The deep learning library used to train the ML model
* [Flask](https://flask.palletsprojects.com/en/2.0.x/) - The micro-web framework used to build API
* [ReactJS](https://reactjs.org/) - The User Interface library used to build the website

