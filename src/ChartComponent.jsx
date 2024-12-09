import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  let chartInstance;

  useEffect(() => {
    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, { type, data, options });
    }
    return () => chartInstance?.destroy();
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;