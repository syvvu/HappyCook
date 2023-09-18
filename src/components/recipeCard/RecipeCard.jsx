import React from "react";
import emojis from "../emojis";
import "./recipeCard.css";

function RecipeCard({ name, ingredients, link, selectedItems }) {
  // Filter out the available ingredients
  const availableIngredients = ingredients.filter((ingredient) =>
    selectedItems.includes(ingredient)
  );

  // Filter out the missing ingredients
  const missingIngredients = ingredients.filter(
    (ingredient) => !selectedItems.includes(ingredient)
  );

  // Concatenate the two arrays
  const sortedIngredients = availableIngredients.concat(missingIngredients);

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
          {sortedIngredients.map((ingredient) => (
            <span
              key={ingredient}
              className={`emoji ${
                selectedItems.includes(ingredient) ? "available" : "missing"
              }`}
            >
              {emojis[ingredient]}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default RecipeCard;
