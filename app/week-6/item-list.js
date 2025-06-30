"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const groupItemsByCategory = (items) => {
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
    return grouped;
  };

  let sortedItems = [...itemsData];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const groupedItems = groupItemsByCategory(
    [...itemsData].sort((a, b) => {
      if (a.category === b.category) {
        return a.name.localeCompare(b.name);
      }
      return a.category.localeCompare(b.category);
    })
  );

  return (
    <div className="p-4 space-y-6">
        <div className="inline-flex space-x-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name"
              ? "bg-orange-300 text-black"
              : "bg-orange-700 text-white"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category"
              ? "bg-orange-300 text-black"
              : "bg-orange-700 text-white"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortBy("grouped")}
          className={`px-4 py-2 rounded ${
            sortBy === "grouped"
              ? "bg-orange-300 text-black"
              : "bg-orange-700 text-white"
          }`}
        >
          Group by Category
        </button>
      </div>


      {sortBy === "grouped" ? (
        Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="space-y-2">
            <h2 className="text-xl font-bold capitalize">{category}</h2>
            <ul className="space-y-2">
              {items.map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
