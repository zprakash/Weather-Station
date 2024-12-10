// src/components/CurrentData.js
import React from 'react';
import cloudGif from '../assets/giff.gif';

const CurrentData = ({ data }) => {
  return (
    <div 
      className="p-2 rounded-lg mb-5 shadow-lg relative overflow-hidden" 
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
          opacity: 0.2 
        }}
      ></div>


      <h2 className="text-3xl font-semibold text-white mb-4">Current Stats</h2>
      <div className="text-5xl font-medium text-white mb-6">
        <p>{data.temperature}°C || {data.humidity}%</p>
      </div>

      {/* Alert Box */}
      <div 
        className="mt-4 mb-6 p-4 border-2 rounded-lg" 
        style={{ 
          zIndex: 2, 
          color: 'white',
          maxWidth: '700px',
          width: '100%',
          textAlign: 'center',
          padding: '10px', 
        }}
      >
        <h3 className="text-lg font-semibold p-2">Alerts:</h3>
        <ul className="list-none pl-0">
          {data.alerts.map((alert, index) => (
            <li key={index} className="mb-2">{alert}</li>
          ))}
        </ul>
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

export default CurrentData;
