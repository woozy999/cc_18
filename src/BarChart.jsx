import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
  const chartData = {
    labels: data?.months || [],
    datasets: [
      {
        label: 'Sales',
        data: data?.sales || [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = { responsive: true };

  return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;
