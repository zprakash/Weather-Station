const db = require('../firebase');

module.exports = async (req, res) => {
  try {
    // Fetch the most recent device data (latest record)
    const snapshot = await db.ref('devices').orderByKey().limitToLast(1).once('value');
    const data = snapshot.val();

    if (data) {
      const latestRecord = Object.values(data)[0]; // Get the latest record

      // Respond with current temperature and humidity
      res.status(200).json({
        temperature: latestRecord.temperature,
        humidity: latestRecord.humidity
      });
    } else {
      res.status(404).send('No data found');
    }
  } catch (error) {
    console.error('Error fetching current data:', error);
    res.status(500).send('Internal server error');
  }
};
