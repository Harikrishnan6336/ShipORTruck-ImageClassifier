# ShipORTruck-ImageClassifier

This project was built as part of my submittion to [TinkerHub Foundation](https://tinkerhub.org/) Practical AI Bootcamp Selection Task

#### A Binary Image Classifier that can classify images as either Ship or Truck. User can call the API by a POST method with image in base64 string as an input data. The API return the predicted label(either SHIP or TRUCK).

## Problem Statement

Create a binary classifier to classify images of ships and trucks. Deploy the model and share links to code in GitHub and the API. 


### Machine Learning

The dataset required for training the ML model was obtained from [CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html) dataset. Several python programs where used to automate the process of procuring the required images of ships and trucks from the CIFAR-10 dataset and the same can be found in [data](https://github.com/Harikrishnan6336/ShipORTruck-ImageClassifier/tree/main/data) folder. 4000 images where used for training and 1000 images where used for validation in each category. Some images where also procured for testing the trained model and they can be found [here](https://github.com/Harikrishnan6336/ShipORTruck-ImageClassifier/tree/main/data/test).

Binary Image classifier is built on PyTorch framework using CNN architecture. Since the training was RAM intensive, it was carried out in Goole Colab and the jupyter notebook used for training and validation can be found [here](https://colab.research.google.com/drive/1qCNDIIqYz8S9UE5bHoh9HoHmZoHLcRp8?usp=sharing). The Validation Loss, was found out and was compared with the number of epochs, using suitable plot diagrams drawn with matplotlib. Required Hypertuning of parameters was done by varying batch size, number of epochs and learning rate. The source code regarding the model can be found in [!@#$$%%%] folder.

The trained ML model service is also made available in the form of an API built on the micro-web framework Flask. The ML model along with the prediction script is incorporated into Flask and deployed onto Heroku after testing it locally. The api can be found [!@#$%^&*].


