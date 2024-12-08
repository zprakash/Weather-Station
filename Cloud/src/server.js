const express = require('express');
const bodyParser = require('body-parser');

// Import the APIs (with the correct file path relative to app.js)
const averageData = require('./apis/averageData');


const app = express();

app.use(bodyParser.json());

// API endpoints
app.get('/average-data', averageData);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
