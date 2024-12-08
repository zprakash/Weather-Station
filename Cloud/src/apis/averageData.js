// src/apis/averageData.js
const db = require('../firebase');

// Helper function to calculate averages
function calculateAverage(data) {
  let totalTemp = 0;
  let totalHumidity = 0;
  let count = 0;

  // Iterate over the records
  for (let key in data) {
    const record = data[key];
    totalTemp += record.temperature || 0;
    totalHumidity += record.humidity || 0;
    count++;
  }

  return {
    averageTemperature: totalTemp / count,
    averageHumidity: totalHumidity / count
  };
}

// API to get average data
module.exports = async (req, res) => {
  try {
    const snapshot = await db.ref('devices').once('value'); // Fetch all devices
    const data = snapshot.val();

    if (data) {
      const averages = calculateAverage(data);
      res.status(200).json(averages); // Return averages
    } else {
      res.status(404).send('No data found');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal server error');
  }
};
