import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images-removebg-preview.png";
import { FaHome, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm py-2"
      style={{
        background: "linear-gradient(90deg, #f7b733, #fc4a1a)", // gradient background
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={Image}
            alt="Coin Status"
            height={50}
            width={90}
            className="me-2 rounded"
            style={{ background: "white", padding: "5px", borderRadius: "8px" }}
          />
        </Link>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          {/* Search Button */}
          <Link
            to="/pagesearch"
            className="btn btn-light d-flex align-items-center me-2 px-3 fw-semibold shadow-sm"
            style={{
              borderRadius: "30px",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#fc4a1a")}
            onMouseOut={(e) => (e.currentTarget.style.background = "white")}
          >
            <FaSearch className="me-2" />
            Search
          </Link>

          {/* Home Button */}
          <Link
            to="/"
            className="btn btn-outline-light d-flex align-items-center px-3 fw-semibold shadow-sm"
            style={{
              borderRadius: "30px",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#fc4a1a";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            <FaHome className="me-2" />
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
