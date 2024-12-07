#include <SPI.h>
#include <WiFiNINA.h>
#include <WiFiSSLClient.h>
#include "DHT.h"

// Replace with your network credentials
const char* ssid = "036-Wifi";
const char* password = "036luokka";

// Firebase project details
#define FIREBASE_HOST "weather-app-86f24-default-rtdb.europe-west1.firebasedatabase.app"  // Replace with your Firebase Realtime Database URL
#define FIREBASE_PATH "/devices"  // Path where the data will be pushed

// Define DHT sensor pin and type
#define DHTPIN A0    // Pin connected to the AM2302 (DHT22)
#define DHTTYPE DHT22 // AM2302 is a DHT22 sensor

// Initialize DHT sensor
DHT dht(DHTPIN, DHTTYPE);

// Initialize WiFiSSLClient for secure communication
WiFiSSLClient client;

void setup() {
  Serial.begin(9600);

  // Initialize DHT sensor
  dht.begin();

  // Connect to Wi-Fi
  Serial.println("Connecting to Wi-Fi...");
  int status = WiFi.begin(ssid, password);
  while (status != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
    status = WiFi.status();
  }
  Serial.println("\nConnected to Wi-Fi!");

  // Wait for the connection to be established
  delay(5000);
}

void loop() {
  // Read temperature and humidity from the sensor
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // Check if the readings are valid
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  // Print readings to the Serial Monitor
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");

  // Create a JSON object with the sensor data
  String deviceName = "Sensor_Am2302";  // Replace with your actual device name
  String jsonData = "{"
    "\"device\": \"" + deviceName + "\","
    "\"temperature\": " + temperature + ","
    "\"humidity\": " + humidity +
  "}";

  // Prepare the Firebase URL (public, no auth required)
  String firebaseUrl = "https://" + String(FIREBASE_HOST) + FIREBASE_PATH + ".json";

  // Connect to Firebase
  Serial.println("Connecting to Firebase...");
  if (client.connect(FIREBASE_HOST, 443)) {
    Serial.println("Connected to Firebase!");

    // Send an HTTP POST request with the sensor data
    client.println("POST " + firebaseUrl + " HTTP/1.1");
    client.println("Host: " + String(FIREBASE_HOST));
    client.println("Connection: close");
    client.println("Content-Type: application/json");
    client.println("Content-Length: " + String(jsonData.length()));
    client.println();
    client.println(jsonData);

    // Wait for the response
    while (client.available()) {
      String line = client.readStringUntil('\r');
      Serial.print(line);  // Print the HTTP response
    }

    client.stop();
  } else {
    Serial.println("Failed to connect to Firebase");
  }

  // Wait before sending the next set of data
  delay(10000); // Adjust the delay as needed
}
