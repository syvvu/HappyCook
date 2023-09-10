import React from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import "./recipesContainer.css";

function CloseMatch() {
  return (
    <div className="recipes-container">
      <RecipeCard
        name="Strawberry Cake"
        emojis={[
          { char: "🍓", status: "available" },
          { char: "🧈", status: "available" },
          { char: "🥚", status: "missing" },
        ]}
        link="https://www.youtube.com/watch?v=fmD5GnrtOjc&ab_channel=PreppyKitchen"
      />
      <RecipeCard
        name="Strawberry Cake"
        emojis={[
          { char: "🍓", status: "available" },
          { char: "🧈", status: "available" },
          { char: "🥚", status: "missing" },
        ]}
        link="https://www.youtube.com/watch?v=fmD5GnrtOjc&ab_channel=PreppyKitchen"
      />
      <RecipeCard
        name="Avocado Toast"
        emojis={[
          { char: "🥑", status: "available" },
          { char: "🍞", status: "available" },
          { char: "🥚", status: "missing" },
        ]}
        link="https://www.youtube.com/watch?v=Rh4EI4luKAQ&ab_channel=BreaktheSpice"
      />
      <RecipeCard
        name="Strawberry Cake"
        emojis={[
          { char: "🍓", status: "available" },
          { char: "🧈", status: "available" },
          { char: "🥚", status: "missing" },
        ]}
        link="https://www.youtube.com/watch?v=fmD5GnrtOjc&ab_channel=PreppyKitchen"
      />
      <RecipeCard
        name="Avocado Toast"
        emojis={[
          { char: "🥑", status: "available" },
          { char: "🍞", status: "available" },
          { char: "🥚", status: "missing" },
        ]}
        link="https://www.youtube.com/watch?v=Rh4EI4luKAQ&ab_channel=BreaktheSpice"
      />
      <RecipeCard
        name="Strawberry Cake"
        emojis={[
          { char: "🍓", status: "available" },
          { char: "🧈", status: "available" },
          { char: "🥚", status: "missing" },
        ]}
        link="https://www.youtube.com/watch?v=fmD5GnrtOjc&ab_channel=PreppyKitchen"
      />
    </div>
  );
}

export default CloseMatch;
