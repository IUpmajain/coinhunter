import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const {
    id,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    market_cap,
  } = product;

  // ✅ Format currency
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <tr className="hover:bg-gray-100 transition cursor-pointer">
      {/* Coin Info */}
      <td className="flex items-center gap-3 py-3 px-4">
        <Link to={`/coin/${id}`} className="flex items-center gap-3">
          <img 
            src={image}
            alt={name} width={80}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold uppercase text-gray-800">
              {symbol}
            </span>
            <span className="text-gray-600 text-sm">{name}</span>
          </div>
        </Link>
      </td>

      {/* Current Price */}
      <td className="py-3 px-4 font-medium text-gray-800">
        {formatCurrency(current_price)}
      </td>

      {/* 24h Change */}
      <td
        className={`py-3 px-4 font-medium ${
          price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {price_change_percentage_24h?.toFixed(2)}%
      </td>

      {/* Market Cap */}
      <td className="py-3 px-4 text-gray-700">
        {market_cap.toLocaleString("en-US")}
      </td>
    </tr>
  );
};

export default Card;
