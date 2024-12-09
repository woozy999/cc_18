import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const bubbleData = {
    datasets: [
      {
        label: 'Sales, Profits, Expenses',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 10, // Adjust bubble size by dividing by 10
        })),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Expenses' } },
      y: { title: { display: true, text: 'Profits' } },
    },
  };

  return <ChartComponent type="bubble" data={bubbleData} options={options} />;
};

export default BubbleChart;
