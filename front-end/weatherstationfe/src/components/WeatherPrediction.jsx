import React from 'react';
import icon from '../assets/temp.svg'; 

const WeatherPrediction = ({ data }) => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black p-10">
      <h2 className="text-xl text-center text-white font-bold mb-12">Prediction for next 7 days</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
        {data.map((day, index) => (
          <div 
            key={index} 
            className="bg-gray-900 p-14 rounded-xl shadow-xl text-white flex flex-col items-center border-2 border-gray-600"
          >
  
            <img src={icon} alt="Weather Icon" className="w-20 h-10 mb-4" />
            
            <p className="text-sm flex items-center space-x-1">
              <span className="whitespace-nowrap">{`${day.predictedTemperature}°C`}</span>
              <span className="whitespace-nowrap">{`||  ${day.predictedHumidity}%`}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherPrediction;
