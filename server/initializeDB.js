require("dotenv").config();
const mongoose = require("mongoose");
const Recipe = require("./recipeModel");

const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.xntmd8p.mongodb.net/${process.env.DB}`;

const recipes = [
    { name: "Creamy Mushroom Chicken", ingredient: ["Chicken", "Garlic", "Onion", "Mushroom", "Cream"], link: "https://www.youtube.com/watch?v=qZP1e4v8kOA&t=12s&ab_channel=YummyKitchen" },
    { name: "Chicken Breast", ingredient: ["Chicken", "Garlic"], link: "https://www.youtube.com/watch?v=Wle1rLCQvuM&ab_channel=EssenRezepte" },
    { name: "Chicken And Broccoli Stir Fry", ingredient: ["Chicken", "Broccoli", "Garlic"], link: "https://www.youtube.com/watch?v=VsEEIAkKiRM&ab_channel=Cook%21StaceyCook" },
];

async function initializeDB() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
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