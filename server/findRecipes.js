import Recipe from "./recipeModel.js";

async function findRecipes(selectedIngredients) {
    try {
        // Find exact matches
        const exactMatches = await Recipe.find({
            ingredient: { $not: { $elemMatch: { $nin: selectedIngredients } } },
        });

        // Find close matches
        const closeMatches = await Recipe.find({
            ingredient: { $in: selectedIngredients },
            _id: { $nin: exactMatches.map((em) => em._id) },
        });

        return {
            exactMatches,
            closeMatches,
        };
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export default findRecipes;