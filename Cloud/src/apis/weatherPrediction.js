const db = require('../firebase');
const regression = require('regression');

// function to predict weather using regression library for multiple days
function predictWeatherForSevenDays(lastTenRecords) {
  const temperatures = lastTenRecords.map((record, index) => [index, record.temperature]);
  const humidities = lastTenRecords.map((record, index) => [index, record.humidity]);

  // Perform linear regression using the regression library
  const tempRegression = regression.linear(temperatures);
  const humidityRegression = regression.linear(humidities);

  // Predict the next 7 days
  const predictions = [];
  const nextIndex = temperatures.length;

  for (let i = 1; i <= 7; i++) {
    const predictedTemp = tempRegression.predict(nextIndex + i)[1]; // predict for the next i days
    const predictedHumidity = humidityRegression.predict(nextIndex + i)[1];

    predictions.push({
      day: i,
      predictedTemperature: predictedTemp,
      predictedHumidity: predictedHumidity,
    });
  }

  return predictions;
}

module.exports = async (req, res) => {
  try {
    const snapshot = await db.ref('devices').orderByKey().limitToLast(10).once('value');
    const data = snapshot.val();

    if (data) {
      const lastTenRecords = Object.values(data);
      const predictions = predictWeatherForSevenDays(lastTenRecords);
      res.status(200).json(predictions);
    } else {
      res.status(404).send('Not enough data for prediction');
    }
  } catch (error) {
    console.error('Error predicting weather:', error);
    res.status(500).send('Internal server error');
  }
};
