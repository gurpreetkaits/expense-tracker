import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function DifferenceBarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Income", "Expenses"],
        datasets: [
          {
            label: "Amount",
            data: [5000, 3500], // Sample data for income and expenses
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-content">
        <div className="card-body">
          <h2 className="text-center mb-4">Stats</h2>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
}

export default DifferenceBarChart;
