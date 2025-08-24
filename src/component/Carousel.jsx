// src/components/Carousel.js

import React, { useContext, useEffect, useCallback, useState } from "react";
import CoinContext from "../context/CoinContext";
import { coinList } from "../context/CoinAction";
import Card from "./Card";

const Carousel = () => {
  const { allData: coins, dispatch } = useContext(CoinContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /** Fetch coin data */
  const fetchCoins = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await coinList();
      dispatch({ type: "GET_ALLCOIN", payload: data });
    } catch (err) {
      console.error("Coin fetch error:", err);
      setError("⚠️ Failed to fetch coin data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  return (
    <div
      className="container-fluid py-5 text-light"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-warning mb-3 display-6">
          📊 Cryptocurrency Market Overview
        </h2>
        <p className="text-muted fs-6">
          Track live prices, 24h performance, and market cap of leading
          cryptocurrencies.
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-warning" role="status"></div>
          <p className="mt-3">Fetching latest market data...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center">
          <p className="text-danger fw-bold">{error}</p>
          <button
            className="btn btn-warning btn-sm mt-2 fw-semibold"
            onClick={fetchCoins}
          >
            🔄 Retry
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && coins.length === 0 && (
        <p className="text-muted text-center fs-5">
          No cryptocurrency data available at the moment.
        </p>
      )}

      {/* Table */}
      {!loading && !error && coins.length > 0 && (
        <div className="container mt-4">
          <div
            className="table-responsive shadow-lg rounded overflow-hidden"
            style={{ borderRadius: "16px" }}
          >
            <table
              className="table table-dark align-middle mb-0"
              aria-label="Cryptocurrency Market Data"
            >
              <thead
                className="bg-primary text-white"
                style={{ fontSize: "0.95rem", letterSpacing: "1px" }}
              >
                <tr>
                  <th scope="col" className="py-3">
                    Coin
                  </th>
                  <th scope="col" className="py-3">
                    Price
                  </th>
                  <th scope="col" className="py-3">
                    24h Change
                  </th>
                  <th scope="col" className="py-3">
                    Market Cap
                  </th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <Card key={coin.id} product={coin} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
