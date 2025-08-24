// src/pages/CoinPage.js

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoinDetails } from "../context/CoinAction";
import CoinContext from "../context/CoinContext";
import Chartism from "../component/Chartism";

const CoinPage = () => {
  const { dispatch, coinData } = useContext(CoinContext);
  const { coinid } = useParams();
  const [loading, setLoading] = useState(false);

  const fetchCoinData = async () => {
    try {
      setLoading(true);
      const data = await getCoinDetails(coinid);
      dispatch({ type: "COIN_DETAILS", payload: data });
    } catch (err) {
      console.error("Error fetching coin details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinid]);

  if (loading || !coinData) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // ✅ Helper functions
  const formatNumber = (num, currency = "USD") => {
    if (!num) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const formatPercent = (value) => {
    if (value === null || value === undefined) return "-";
    return (
      <span style={{ color: value > 0 ? "rgb(14, 203, 129)" : "red" }}>
        {value.toFixed(2)}%
      </span>
    );
  };

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Left Column → Chart */}
          <div className="col-md-8">
            <div
              className="card shadow-lg p-4 h-100"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
              }}
            >
              <h4 className="fw-bold mb-3 text-warning">Price Trend</h4>
              <Chartism />
            </div>
          </div>

          {/* Right Column → Coin Details */}
          <div className="col-md-4">
            <div
              className="card shadow-lg p-4 h-100"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
              }}
            >
              {/* Header Section */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <img
                  src={coinData.image?.large}
                  alt={coinData.name}
                  height={80}
                  className="rounded-circle border border-light shadow-sm"
                />
                <div>
                  <h3 className="fw-bold text-white">
                    {coinData.name} ({coinData.symbol.toUpperCase()})
                  </h3>
                  <h6 className="text-warning">
                    Rank #{coinData.market_cap_rank}
                  </h6>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-3">
                <h4 className="fw-bold text-info">
                  {formatNumber(coinData.market_data.current_price.usd, "USD")}{" "}
                  <small className="fs-6 text-light">(USD)</small>
                </h4>
                <h4 className="fw-bold text-info">
                  {formatNumber(coinData.market_data.current_price.inr, "INR")}{" "}
                  <small className="fs-6 text-light">(INR)</small>
                </h4>
              </div>

              {/* Description */}
              <p className="small text-light fs-bold">
                {coinData.description?.en
                  ? coinData.description.en.split(". ")[0] + "."
                  : "No description available."}
              </p>

              {/* Price Change Section */}
              <div
  className="card shadow-sm p-4 mt-3"
  style={{
    background: "rgba(0, 0, 0, 0.4)",
    borderRadius: "15px",
  }}
>
  <h6 className="fw-bold mb-3 text-warning">📊 Price Change %</h6>
  <ul className="list-unstyled mb-0 space-y-2">
    {[
      { label: "24h", value: coinData.market_data.price_change_percentage_24h },
      { label: "7d", value: coinData.market_data.price_change_percentage_7d },
      { label: "14d", value: coinData.market_data.price_change_percentage_14d },
      { label: "30d", value: coinData.market_data.price_change_percentage_30d },
      { label: "1yr", value: coinData.market_data.price_change_percentage_1y },
    ].map(({ label, value }) => (
      <li
        key={label}
        className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2"
      >
        <span className="text-light">{label}:</span>
        <span
          className={
            value > 0 ? "text-success fw-semibold" : "text-danger fw-semibold"
          }
        >
          {formatPercent(value)}
        </span>
      </li>
    ))}
  </ul>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
