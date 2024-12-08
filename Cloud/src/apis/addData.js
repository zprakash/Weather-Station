const db = require('../firebase');

module.exports = async (req, res) => {
  const { deviceId, temperature, humidity } = req.body;

  // Early validation for missing data
  if (!deviceId || temperature == null || humidity == null) {
    return res.status(400).json({ error: 'Device ID, temperature, and humidity are required' });
  }

  // Validate that temperature and humidity are valid numbers
  if (isNaN(temperature) || isNaN(humidity)) {
    return res.status(400).json({ error: 'Temperature and humidity must be valid numbers' });
  }

  try {

    const uniqueDeviceId = `${deviceId}-${Date.now()}`;
    // Prepare the data object with current timestamp
    const deviceData = {
      temperature: parseFloat(temperature),  // Ensure floating-point number
      humidity: parseFloat(humidity),        // Ensure floating-point number
      timestamp: new Date().toISOString(),   // Store timestamp in ISO 8601 format
    };

    // Reference the database for the device
    const deviceRef = db.ref('devices').child(uniqueDeviceId);

    // Update the device record in the database
    await deviceRef.set(deviceData);

    // Log success
    console.log(`Device data for ${deviceId} added successfully at ${deviceData.timestamp}`);

    // Send success response
    return res.status(201).json({ message: 'Device data added successfully', deviceData });
  } catch (error) {
    // Log error
    console.error('Error adding device data:', error);

    // Send internal server error response with generic message
    return res.status(500).json({ error: 'Internal server error, please try again later' });
  }
};
