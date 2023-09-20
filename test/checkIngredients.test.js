const fetchRecipes = require('../server/fetchRecipes'); 
const { emojis } = require('../src/components/emojis');

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
