"use client";
import { useState, useEffect } from "react";

export default function MealIdea({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const loadMealIdeas = async () => {
    await fetchMealIdeas(ingredient);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <div>
        {meals ? (
          <div>
            <div>Here are some meal ideas using {ingredient}:</div>
            <div>
              {meals.map((meal) => (
                <ul key={meal.idMeal}>
                  <li className='p-2 m-1 mt-2 bg-teal-900 hover:bg-blue-900 cursor-pointer rounded-md'>
                    {meal.strMeal}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ) : (
          <div>No meal ideas found for {ingredient}</div>
        )}
      </div>
    </div>
  );
}