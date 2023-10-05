import fetchRecipes from "../server/fetchRecipes";
import emojis from "../src/components/emojis";

describe("Check Ingredients against Emojis", () => {
  
  it('all ingredients should have corresponding emojis', async () => {
    const recipes = await fetchRecipes();

    let row = 2;

    recipes.forEach(recipe => {
      recipe.ingredient.forEach(ing => {
        if (!emojis.hasOwnProperty(ing)) {
          console.error(`Error in row ${row}: Ingredient "${ing}" does not have a corresponding emoji.`);
          expect(emojis).toHaveProperty(ing);
        }
      });
      row++;
    });
  });
});

describe("Check Recipe Links", () => {

  it('all recipe links should be unique', async () => {
    const recipes = await fetchRecipes();

    const linksSet = new Set();
    let row = 2;

    recipes.forEach(recipe => {
      if (linksSet.has(recipe.link)) {
        console.error(`Duplicate link found on row ${row}: "${recipe.link}".`);
        expect(false).toBe(true);
      } else {
        linksSet.add(recipe.link);
      }
      row++;
    });

    expect(linksSet.size).toBe(recipes.length);
  });
});