import React, { useState } from "react";
import backgroundVid from '../assets/bg.mp4'; 

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover  opacity-30"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="p-8 rounded-lg bg-transparent shadow-xl w-full max-w-md z-10">
        <div className="p-6 rounded-lg shadow-lg border border-gray-300 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent">
          <h1 className="text-white text-3xl mb-6 text-center">Weather Station</h1>

          <form onSubmit={handleSearch} className="flex items-center justify-between space-x-4">
            <input
              type="text"
              placeholder="Search area...."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none w-3/4"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white font-semibold transition duration-200 w-1/4"
            >
              Search
            </button>
          </form>
        </div>

        <div className="mt-6 text-center text-white">
          <p>Search for weather status!!</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
