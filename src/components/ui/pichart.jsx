import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExamResultsPieChart = ({ results }) => {
  // Example data structure for results
  const data = {
    labels: ["درست", "غلط"],
    datasets: [
      {
        label: "نتیجۀ آزمون",
        data: [results.correctAnswers, results.incorrectAnswers], // Replace with your actual data
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Green for correct
          "rgba(255, 99, 132, 0.6)", // Red for incorrect
          "rgba(255, 206, 86, 0.6)", // Yellow for skipped
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Pie style={{fontFamily: "dana_regular"}} data={data} options={options} />;
};

export default ExamResultsPieChart;