// src/components/AverageData.js
import React from 'react';
import cloudGif from '../assets/giff.gif'; 

const AverageData = ({ data }) => {
    return (
        <div 
        className="p-20 mt-6 rounded-lg shadow-lg relative overflow-hidden" 
        style={{ 
          color: 'white', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          backgroundColor: 'black' 
        }}
        >
            <div 
                style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    backgroundImage: `url(${cloudGif})`, 
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat', 
                    animation: 'moveClouds 20s linear infinite', 
                    zIndex: 1,
                    opacity:0.2
                }}
            ></div>
        
            <h2 className="text-xl font-semibold mb-4 col">Average Data</h2>
            <div className="flex space-x-4" style={{ justifyContent: 'center' }}>
             
                <div 
                    className="flex-1 p-2 border rounded-lg" 
                    style={{ backgroundColor: '#1a1a1a', textAlign: 'center', border: '1px solid #555', maxWidth: '200px' }}
                >
                    <h3 className="text-sm font-medium">Average Temperature</h3>
                    <p className="text-lg font-bold">{data.averageTemperature}°C</p>
                </div>
        
 
                <div 
                    className="flex-1 p-2 border rounded-lg" 
                    style={{ backgroundColor: '#1a1a1a', textAlign: 'center', border: '1px solid #555', maxWidth: '200px' }}
                >
                    <h3 className="text-sm font-medium">Average Humidity</h3>
                    <p className="text-lg font-bold">{data.averageHumidity}%</p>
                </div>
            </div>
        

            <style>{`
                @keyframes moveClouds {
                    0% { background-position: 0 0; }
                    100% { background-position: 100% 0; }
                }
            `}</style>
        </div>
    );
};

export default AverageData;
