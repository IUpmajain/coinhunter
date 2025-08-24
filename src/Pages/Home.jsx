import React from "react";
import Carousel from "../component/Carousel";
import Carouseel from "../component/Carouseel";

const Home = () => {
  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        background: "radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)",
        backgroundAttachment: "fixed",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glowing orbs for effect */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: "250px",
          height: "250px",
          background: "rgba(0, 255, 204, 0.15)",
          borderRadius: "50%",
          filter: "blur(120px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: "300px",
          height: "300px",
          background: "rgba(255, 0, 128, 0.2)",
          borderRadius: "50%",
          filter: "blur(150px)",
        }}
      />

      <div className="container text-center py-5 position-relative">
        {/* Hero Section */}
        <h1 className="display-4 fw-bold mb-4 text-gradient">
          🚀 Welcome to Crypto Dashboard
        </h1>
        <p className="lead mb-5">
          Track live prices, analyze trends, and explore the world of
          cryptocurrencies.
        </p>

        {/* Carousels */}
        <div className="row g-4">
          <div className="col-12">
            <Carouseel />
          </div>
          <div className="col-12">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
