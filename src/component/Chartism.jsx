// src/components/Chartism.js

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js/auto";
import CoinContext from "../context/CoinContext";
import { getChartDetails } from "../context/CoinAction";
import SelectButton from "./SelectButton";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chartism = () => {
  const { dispatch, coinChart } = useContext(CoinContext);
  const { coinid } = useParams();

  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchChartCoin = async () => {
    try {
      setLoading(true);
      const data = await getChartDetails(coinid, days);
      dispatch({ type: "COIN_CHART", payload: data });
    } catch (err) {
      console.error("Error fetching chart data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, coinid]);

  if (loading || !coinChart) {
    return (
      <div className="text-center mt-4">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading chart...</span>
        </div>
      </div>
    );
  }

  const chartDays = [
    { label: "24 Hours", value: 1 },
    { label: "30 Days", value: 30 },
    { label: "3 Months", value: 90 },
    { label: "1 Year", value: 365 },
  ];

  const data = {
    labels: coinChart.map((point) => {
      let date = new Date(point[0]);
      let hours = date.getHours();
      let minutes = date.getMinutes().toString().padStart(2, "0");
      let time =
        hours > 12
          ? `${hours - 12}:${minutes} PM`
          : `${hours}:${minutes} AM`;

      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        data: coinChart.map((point) => point[1]),
        label: `Price (Past ${days === 1 ? "24 Hours" : days + " Days"}) in USD`,
        borderColor: "#FFD700", // brighter gold
        backgroundColor: "rgba(255, 215, 0, 0.1)", // soft yellow fill
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#f8f9fa", // white text
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        bodyColor: "#212529", // dark tooltip text
        titleColor: "#000",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleFont: { weight: "bold" },
      },
    },
    elements: {
      point: { radius: 2, backgroundColor: "#FFD700" },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 10,
          color: "#f8f9fa", // white
          font: { size: 12 },
        },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        ticks: {
          color: "#f8f9fa", // white
          font: { size: 12 },
        },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  return (
    <div className="mt-4">
      <h4 className="fw-bold text-warning mb-3 text-center">
        📈 Coin Price Trend
      </h4>
      <Line data={data} options={options} />

      <div className="d-flex justify-content-center flex-wrap gap-2 mt-4 text-light">
        {chartDays.map((option) => (
          <SelectButton
            key={option.value}
            onClick={() => setDays(option.value)}
            selected={days === option.value}
          >
            {option.label}
          </SelectButton>
        ))}
      </div>
    </div>
  );
};

export default Chartism;
