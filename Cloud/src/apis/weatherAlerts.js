const db = require('../firebase');

// Define thresholds for temperature and humidity
const THRESHOLDS = {
  temperature: { low: 15, high: 30 },
  humidity: { low: 20, high: 60 }
};

module.exports = async (req, res) => {
  try {
    const snapshot = await db.ref('devices').orderByKey().limitToLast(1).once('value');
    const data = snapshot.val();

    if (data) {
      const latestRecord = Object.values(data)[0]; 
      const alerts = [];

      // Check temperature thresholds
      if (latestRecord.temperature < THRESHOLDS.temperature.low) {
        alerts.push(`Temperature is too low! Current temperature: ${latestRecord.temperature}°C. Consider increasing heating.`);
      }
      if (latestRecord.temperature > THRESHOLDS.temperature.high) {
        alerts.push(`Temperature is too high! Current temperature: ${latestRecord.temperature}°C. Consider cooling the area.`);
      }

      // Add an alert for normal temperature if it's within the range
      if (latestRecord.temperature >= THRESHOLDS.temperature.low && latestRecord.temperature <= THRESHOLDS.temperature.high) {
        alerts.push(`Temperature is normal. Current temperature: ${latestRecord.temperature}°C.`);
      }

      // Check humidity thresholds
      if (latestRecord.humidity < THRESHOLDS.humidity.low) {
        alerts.push(`Humidity is too low! Current humidity: ${latestRecord.humidity}%. Consider using a humidifier.`);
      }
      if (latestRecord.humidity > THRESHOLDS.humidity.high) {
        alerts.push(`Humidity is too high! Current humidity: ${latestRecord.humidity}%. Consider using a dehumidifier.`);
      }

      // Add an alert for normal humidity if it's within the range
      if (latestRecord.humidity >= THRESHOLDS.humidity.low && latestRecord.humidity <= THRESHOLDS.humidity.high) {
        alerts.push(`Humidity is normal. Current humidity: ${latestRecord.humidity}%.`);
      }

      // Return the alerts as a JSON response
      res.status(200).json({ alerts });
    } else {
      res.status(404).send('No data found');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal server error');
  }
};
