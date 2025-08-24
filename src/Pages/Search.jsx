import React, { useContext, useState } from "react";
import CoinContext from "../context/CoinContext";
import { SearchCoin } from "../context/CoinAction";
import CarcContainer from "../component/CarcContainer";

const Search = () => {
  const { dispatch } = useContext(CoinContext);

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("⚠️ Please enter a coin name or symbol.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await SearchCoin(text.trim());

      if (data && data.length > 0) {
        dispatch({
          type: "SEARCH_COINS",
          payload: data,
        });
      } else {
        setError("❌ No coins found. Try another search.");
      }
    } catch (err) {
      setError("🚨 Failed to fetch coins. Please try again.");
    } finally {
      setLoading(false);
      setText("");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        padding: "20px",
      }}
    >
      <div
        className="p-4 rounded shadow-lg w-100"
        style={{
          maxWidth: "600px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <form className="d-flex gap-2" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="🔍 Search any coin..."
            aria-label="Search"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            className="btn btn-success px-4"
            type="submit"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {/* Error message */}
        {error && (
          <div className="alert alert-danger mt-2 p-2" role="alert">
            {error}
          </div>
        )}
      </div>

      <div className="mt-4 w-100">
        <CarcContainer />
      </div>
    </div>
  );
};

export default Search;
