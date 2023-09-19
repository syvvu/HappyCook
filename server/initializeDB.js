require("dotenv").config();
const mongoose = require("mongoose");
const Recipe = require("./recipeModel");
const fetchRecipes = require("./fetchRecipes");

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@recipedbcluster.grv4wcj.mongodb.net/recipeDB?retryWrites=true&w=majority`;

async function initializeDB() {
  try {
    const recipes = await fetchRecipes(); // Fetching recipes from Google Sheet

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const count = await Recipe.countDocuments();

    if (count === 0) {
      await Recipe.insertMany(recipes);
      console.log("Initialized recipes collection.");
    } else {
      console.log("Database already contains data. No records inserted.");
    }

    mongoose.disconnect();
  } catch (error) {
    console.error("Error during database initialization:", error);
  }
}

initializeDB();
