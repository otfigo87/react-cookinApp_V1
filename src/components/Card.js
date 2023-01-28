import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="meal-card">
        <h2>{meal.strMeal}</h2>
        <h4>Origin: {meal.strArea}</h4>
        <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
        <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
