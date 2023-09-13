require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.xntmd8p.mongodb.net/${process.env.DB}`;

const recipeSchema = new mongoose.Schema({
    name: String,
    ingredient: [String],
    link: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

const recipes = [
    { name: "Chicken Breast", ingredient: ["Chicken", "Garlic", "Onion", "Mushroom", "Cream"], link: "https://www.youtube.com/watch?v=qZP1e4v8kOA&t=12s&ab_channel=YummyKitchen" },
    { name: "Creamy Mushroom Chicken", ingredient: ["Chicken", "Garlic"], link: "https://www.youtube.com/watch?v=Wle1rLCQvuM&ab_channel=EssenRezepte" },
    { name: "Chicken And Broccoli Stir Fry", ingredient: ["Chicken", "Broccoli", "Garlic"], link: "https://www.youtube.com/watch?v=VsEEIAkKiRM&ab_channel=Cook%21StaceyCook" },
];

async function main() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        const count = await Recipe.countDocuments();

        if (count === 0) {
            const docs = await Recipe.insertMany(recipes);
            console.log("Documents inserted:", docs);
        } else {
            console.log("No documents inserted. Collection already has data.");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        mongoose.disconnect();
    }
}

main();