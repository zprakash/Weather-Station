# Weather Monitoring App

This Weather Monitoring App is a full-stack project that measures temperature and humidity using a sensor (connected to an Arduino), saves the data to Firebase storage, and provides real-time weather data predictions. It features a stylish frontend that shows current temperature and humidity, weather predictions for the next 7 days, and alerts users about significant changes in temperature or humidity. The app also includes charts for visualizing the data.

## Features
- **Real-time Data Fetching**: The app fetches the latest temperature and humidity data from Firebase storage.
- **Average Calculations**: It calculates the average temperature and humidity over a specified period.
- **Weather Prediction**: The app predicts the temperature and humidity for the next 7 days based on historical data.
- **Alerts**: The app alerts users about sudden drops or rises in temperature or humidity.
- **Charts**: Beautiful charts visualize historical temperature and humidity data.
- **Stylish Frontend**: The frontend is built with React and styled with Tailwind CSS, providing an attractive and responsive interface.

## Technologies Used
- **Frontend**:
  - React: JavaScript library for building user interfaces.
  - Tailwind CSS: Utility-first CSS framework for creating custom designs.
  - Axios: Promise-based HTTP client for making requests to the server.
  
- **Backend**:
  - Node.js: JavaScript runtime for building the server.
  - Express: Web framework for Node.js to handle API requests.
  - Firebase: Real-time database and storage for saving temperature and humidity data.
  
- **Hardware**:
  - Arduino: Microcontroller used to measure temperature and humidity with sensors like DHT11 or DHT22.

## How It Works

1. **Arduino Sensors**: Temperature and humidity sensors (e.g., DHT11 or DHT22) connected to an Arduino board are used to capture real-time temperature and humidity readings.
   
2. **Data Storage**: The captured data is sent to a Firebase database where it's stored for further processing.

3. **API Calls**:
   - **Current Data**: The app fetches the current temperature, humidity, and alert data from the server.
   - **Predicted Weather**: The server calculates and provides the predicted temperature and humidity for the next 7 days based on historical data.
   - **Average Data**: The server calculates the average temperature and humidity over a given period.
   
4. **Frontend**: 
   - The frontend is built using React and Tailwind CSS to display real-time weather data, predictions, and charts.
   - Alerts are displayed for sudden changes in temperature or humidity, and users can view weather predictions and historical charts.

5. **Charts**: Historical data (such as the last 200 temperature and humidity readings) is displayed using charts for visual analysis.