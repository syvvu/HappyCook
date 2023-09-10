import React from "react";
import "./recipeCard.css";

function RecipeCard({ name, emojis, link }) {
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
          {emojis.map((emojiObj, index) => (
            <span key={index} className={`emoji ${emojiObj.status}`}>
              {emojiObj.char}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default RecipeCard;
