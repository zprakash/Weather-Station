// App.jsx
import React, { useEffect, useState } from 'react';
import axios from './axios'; // API utility file
import CurrentData from './components/CurrentData';
import WeatherPrediction from './components/WeatherPrediction';
import AverageData from './components/AverageData';
import Chart from './components/Chart';
import Header from './components/Header';
import SearchBar from './components/SearchBar'; 
import Footer from "./components/Footer";

const App = () => {
  const [currentData, setCurrentData] = useState(null);
  const [weatherPrediction, setWeatherPrediction] = useState([]);
  const [averageData, setAverageData] = useState(null);
  const [last200Data, setLast200Data] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentResponse = await axios.get('current-data');
        setCurrentData(currentResponse.data);

        const weatherResponse = await axios.get('predict-weather');
        setWeatherPrediction(weatherResponse.data);

        const averageResponse = await axios.get('average-data');
        setAverageData(averageResponse.data);

        const last200Response = await axios.get('last-200-data');
        setLast200Data(last200Response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchTerm.trim()) {
      fetchData(); 
    }
  }, [searchTerm]); 

  const handleSearch = (term) => {
    setSearchTerm(term); 
  };

  const handleBackToSearch = () => {
    setSearchTerm(''); 
  };

  return (
    <div
      className=" bg-gradient-to-r from-black via-gray-900 to-black min-h-screen"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: 'black'
      }}
    >
      {!searchTerm ? (
        <SearchBar onSearch={handleSearch} />
      ) : (
        <>
          <button
            onClick={handleBackToSearch}
            className="m-4 px-4 py-2 rounded-md bg-gray-700 text-white"
          >
            Back to Search
          </button>

          {/* Loading state */}
          {!currentData || !weatherPrediction || !averageData || !last200Data ? (
            <div className="text-center mt-8 text-white">Loading...</div>
          ) : (
            <>
              <Header />
              <CurrentData data={currentData} />
              <WeatherPrediction data={weatherPrediction} />
              <AverageData data={averageData} />
              <Chart data={last200Data} />
            </>
          )}
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;
