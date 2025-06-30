"use client";

import React, { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  }

  function decrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log("Submitted item:", item);
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <div className="min-h-screen bg-black flex justify-center items-start pt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1c23] p-6 space-y-4 shadow-lg rounded-lg w-full max-w-md"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between items-center space-x-4">
          <div className="inline-flex items-center space-x-3 bg-white px-4 py-2 border border-gray-300 rounded-md">
            <span className="text-lg font-mono min-w-[2rem] text-black text-center">
              {quantity}
            </span>

            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`w-8 h-8 flex items-center justify-center font-bold text-black rounded-md ${
                quantity === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              –
            </button>

            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`w-8 h-8 flex items-center justify-center font-bold text-black rounded-md ${
                quantity === 20
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              +
            </button>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-3 py-2 text-sm hover:bg-blue-700 transition rounded-md"
        >
          +
        </button>
      </form>
    </div>
  );
}
