import React from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import "./recipesContainer.css";

function RecipesContainer({ recipes, selectedItems }) {
  const noMatchMessages = [
    "Oops! We couldn't find what you're looking for.",
    "Our chefs are scratching their heads!",
    "Looks like that recipe is still being cooked up!",
    "The chef recommends trying another ingredient or two. No matches right now!",
    "Our cookbook's coming up blank for that one!",
    "Hmm, looks like we're out of recipes for this one.",
    "Missing ingredients! We couldn't cook up any matching recipes.",
    "Cook's out of the kitchen! We couldn't find any matches.",
  ];

  const randomMessage =
    noMatchMessages[Math.floor(Math.random() * noMatchMessages.length)];

  if (recipes.length === 0) {
    return (
      <div className="no-match-container">
        <p>{randomMessage}</p>
      </div>
    );
  }

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

export default RecipesContainer;
