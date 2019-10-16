var path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mockAPIResponse = require('./mockAPI.js');

const PORT = 8080;

const app = express();

// configure express to use body-parse as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// configure client code
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
