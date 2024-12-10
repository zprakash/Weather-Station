import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Entry ${index + 1}`),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(item => item.temperature),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Humidity (%)',
        data: data.map(item => item.humidity),
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,  
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,  
        }
      },
      y: {
        beginAtZero: true,
      }
    },
  };

  return (
    <div className="bg-white p-3 mt-6 rounded-lg shadow-lg max-w-full">
      <h2 className="text-xl font-semibold mb-4">Data (Last 200 Entries)</h2>
      <div className="relative w-full sm:h-64 md:h-80 lg:h-96">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Chart;
