import React from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import "./recipesContainer.css";

function ExactMatch({ recipes, selectedItems }) {
  return (
    <div className="recipes-container">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          name={recipe.name}
          ingredients={recipe.ingredient}
          link={recipe.link}
          selectedItems={selectedItems}
        />
      ))}
    </div>
  );
}

export default ExactMatch;
