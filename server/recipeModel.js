import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    name: String,
    ingredient: [String],
    link: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;