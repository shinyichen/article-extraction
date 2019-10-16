const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mockAPIResponse = require('./mockAPI.js');
const aylient = require('aylien_textapi');
const dotenv = require('dotenv');

const PORT = 8000;
const app = express();
dotenv.config();
const textApi = new aylient({
    application_id: process.env.AYLIENT_API_ID,
    application_key: process.env.AYLIENT_API_KEY
  });
const textApiEndpoint = "https://api.aylien.com/api/v1";

// configure express to use body-parse as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// configure client code
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
})

app.post('/test', function (req, res) {
    const url = req.body.url;
    textApi.classify({
        'url': url
      }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(response);
        } else {
            res.send(error);
        }
      });
      
})
