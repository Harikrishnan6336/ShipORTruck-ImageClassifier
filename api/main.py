from flask import Flask, jsonify, request
from flask_cors import CORS
from model_scripts.ml_predict import predict, Network
import base64

app = Flask("shipORtruck")
CORS(app)

@app.route('/', methods=['POST'])
def index():
    key_dict = request.get_json()
    image = key_dict["image"]
    imgdata = base64.b64decode(image)
    model = Network()
    result = predict(model, imgdata)
    response = {
        "result" : result,
    }
    response = jsonify(response)
    return response


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)