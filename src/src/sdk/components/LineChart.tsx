import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

// eslint-disable-next-line
function LineChart(chartData: any) {

    const options = {
        plugins: {
            title: {
            display: true,
            text: "Log Losses by Model"
            },
            legend: {
            display: false
            }
        },
          y: {
            beginAtZero: true,
          },
    }

  return (
    <div className="ChartContainer">      
      <Line
        className="chart"
        data={chartData.chartData}
        options={options}
      />
    </div>
  );
}
export default LineChart;