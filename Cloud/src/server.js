const express = require('express');
const bodyParser = require('body-parser');

// Import the APIs (with the correct file path relative to app.js)
const averageData = require('./apis/averageData');
const weatherPrediction = require('./apis/weatherPrediction');


const app = express();

app.use(bodyParser.json());

// Define API endpoints
app.get('/average-data', averageData);
app.get('/predict-weather', weatherPrediction);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
