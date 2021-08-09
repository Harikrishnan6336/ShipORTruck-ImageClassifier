import React, { useState } from "react";
import "./App.css";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const api_link = "https://truckorship.herokuapp.com/";

function App() {
  const [baseImage, setBaseImage] = useState("");
  const [imgData, setImgData] = useState("");
  const [result, setResult] = useState("");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    const baseString = base64.split("base64,")[1];
    setImgData(baseString);
  };

  const identify = async (e) => {
    await axios
      .post(api_link, {
        image: imgData,
      })
      .then((res) => {
        console.log("result ==   " + res.data.result);
        setResult(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1 className="main-heading">Ship OR Truck Classifier</h1>
      <br />
      <br />
      <Form className="inputfile">
        <Form.Group controlId="formFile" className="mb-3 form-input-group">
          <Form.Label className="form-input-label">
            Input an image file :{" "}
          </Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              uploadImage(e);
              setResult("");
            }}
          />
        </Form.Group>
      </Form>
      <br></br>
      <img
        src={baseImage}
        className={baseImage ? "d-inline-block" : "d-none"}
        height="200px"
        alt="uploaded"
      />
      <h2 id="result-heading" className={result ? "d-block" : "d-none"}>
        It's a <span>{result.toUpperCase()}</span>
      </h2>
      <Button
        variant="primary"
        id="button-upload"
        onClick={() => {
          if (baseImage === "") {
            alert("No image uploaded");
          } else {
            setResult("");
            identify();
          }
        }}
      >
        <span className="button-text">Identify</span>
      </Button>

      {/* <Button
        onClick={() => {
          console.log(imgData);
        }}
      >
        debug
      </Button> */}
    </div>
  );
}

export default App;
