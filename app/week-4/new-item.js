"use client";

import React, { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  }

  function decrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  return (
    <div className="min-h-screen bg-black flex justify-center items-start p-8">
      <div className="inline-flex items-center space-x-3 bg-white px-4 py-2 shadow-lg" style={{ borderRadius: 0 }}>
        <span className="text-lg font-mono min-w-[2rem] text-black text-center">
          {quantity}
        </span>

        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`w-8 h-8 flex items-center justify-center font-bold text-black rounded ${
            quantity === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          –
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`w-8 h-8 flex items-center justify-center font-bold text-black rounded ${
            quantity === 20
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}

