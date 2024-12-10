const db = require('../firebase');

module.exports = async (req, res) => {
  try {
    // Fetch the last 200 data entries from the Firebase Realtime Database
    const snapshot = await db.ref('devices').orderByKey().limitToLast(200).once('value');
    const data = snapshot.val();

    if (data) {
      const records = Object.values(data);  // Convert the Firebase object to an array of records
      res.status(200).json(records);  // Return the last 200 records
    } else {
      res.status(404).send('No data found');
    }
  } catch (error) {
    console.error('Error fetching last 200 data:', error);
    res.status(500).send('Internal server error');
  }
};
