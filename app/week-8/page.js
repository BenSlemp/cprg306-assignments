"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    const newItem = { ...item, id: crypto.randomUUID() };
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(name) {
    const cleaned = name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();
    setSelectedItemName(cleaned);
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List with Meal Ideas</h1>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-6">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
