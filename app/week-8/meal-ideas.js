"use client";

import { useEffect, useState } from "react";

function extractIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return ingredients;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  async function fetchMealIdeas(ingredient) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  }

  async function fetchMealDetails(mealId) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    if (data.meals && data.meals.length > 0) {
      const meal = data.meals[0];
      setSelectedMeal(meal);
      setIngredients(extractIngredients(meal));
    }
  }

  async function loadMealIdeas() {
    if (!ingredient) return;
    setSelectedMeal(null);
    setIngredients([]);
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas);
  }

 useEffect(() => {
  if (ingredient) {
    loadMealIdeas();
  }
}, [ingredient]);


  return (
    <div className="bg-[#0f172a] text-white p-4 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-1">Meal Ideas</h2>
      {ingredient && (
        <p className="mb-4 text-sm text-gray-300">
          Here are some meal ideas using <span className="font-medium">{ingredient}</span>:
        </p>
      )}
<ul className="space-y-2 mb-4">
  {meals.map((meal) => (
    <li key={meal.idMeal}>
      <div
        onClick={() => fetchMealDetails(meal.idMeal)}
        className="bg-[#1e293b] px-4 py-2 rounded hover:bg-[#334155] transition cursor-pointer"
      >
        {meal.strMeal}
      </div>

      {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
        <ul className="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
          {ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>

      {selectedMeal && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">{selectedMeal.strMeal}</h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
