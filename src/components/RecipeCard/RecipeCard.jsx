import React from "react";
import { proteins, vegetables, grains, dairy } from "../emojis";
import "./RecipeCard.css";

function RecipeCard({ name, ingredients, link, selectedItems }) {
  const categoryOrder = [proteins, vegetables, grains, dairy];

  // Render ingredients based on their availability and category order
  const renderIngredients = (isAvailable) => {
    return categoryOrder.flatMap(currentCategory => {
      return Object.keys(currentCategory)
        .filter(ingredient => ingredients.includes(ingredient))
        .filter(ingredient => isAvailable ? selectedItems.includes(ingredient) : !selectedItems.includes(ingredient))
        .map(ingredient => (
          <span
            key={ingredient}
            className={`emoji ${isAvailable ? "available" : "missing"}`}
          >
            {currentCategory[ingredient]}
          </span>
        ));
    });
  }

  return (
    <a
      href={link}
      className="card-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="recipe-card">
        <div className="recipe-name">{name}</div>
        <hr />
        <div className="recipe-emojis">
          {renderIngredients(true)}
          {renderIngredients(false)}
        </div>
      </div>
    </a>
  );
}

export default RecipeCard;