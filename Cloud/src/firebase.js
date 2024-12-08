const admin = require('firebase-admin');

// Load service account key
const serviceAccount = require('../firebase-key.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://weather-app-86f24-default-rtdb.europe-west1.firebasedatabase.app/' 
});

const db = admin.database();

module.exports = db;
