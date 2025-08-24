// CarcContainer.js

import React, { useContext } from "react";
import CardItem from "./CardItem";
import CoinContext from "../context/CoinContext";

const CarcContainer = () => {
  const { coins, loading } = useContext(CoinContext);

  // ✅ Show loading spinner
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading coins...</span>
        </div>
      </div>
    );
  }

  // ✅ Show empty state
  if (!coins || coins.length === 0) {
    return (
      <div className="text-center text-muted my-5">
        <h5>🔎 No coins found</h5>
        <p className="mb-0">Try searching for Bitcoin, Ethereum, or another token.</p>
      </div>
    );
  }

  return (
    <div className="row g-4 m-2">
      {coins.map((coin) => (
        <div key={coin.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <CardItem coin={coin} />
        </div>
      ))}
    </div>
  );
};

export default CarcContainer;
