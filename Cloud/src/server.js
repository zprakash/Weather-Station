const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import the APIs (with the correct file path relative to app.js)
const averageData = require('./apis/averageData');
const weatherPrediction = require('./apis/weatherPrediction');
const addData = require('./apis/addData');
const currentData = require('./apis/currentData');
const getLast200Data = require('./apis/fetchlast200data');



const app = express();

app.use(cors());

app.use(bodyParser.json());

// API endpoints
app.get('/average-data', averageData);
app.get('/predict-weather', weatherPrediction);
app.post('/add-data', addData);
app.get('/current-data', currentData);
app.get('/last-200-data', getLast200Data);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
