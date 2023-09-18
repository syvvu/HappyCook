import React from "react";
import emojis from "../emojis";
import "./recipeCard.css";

function RecipeCard({ name, ingredients, link, selectedItems }) {
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
          {ingredients.map((ingredient) => (
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
