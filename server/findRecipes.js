require("dotenv").config();
const mongoose = require("mongoose");
const Recipe = require("./recipeModel");

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@recipedbcluster.grv4wcj.mongodb.net/recipeDB?retryWrites=true&w=majority`;

async function findRecipes(selectedIngredients) {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Find exact matches: recipes whose ingredients are entirely contained within the user's selection
    const exactMatches = await Recipe.find({
      ingredient: { $not: { $elemMatch: { $nin: selectedIngredients } } },
    });

    // Find close matches: recipes that contain at least one of the ingredients selected by the user
    const closeMatches = await Recipe.find({
      ingredient: { $in: selectedIngredients },
      _id: { $nin: exactMatches.map((em) => em._id) }, // Exclude the exact matches
    });

    return {
      exactMatches,
      closeMatches,
    };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    mongoose.disconnect();
  }
}

module.exports = findRecipes;
