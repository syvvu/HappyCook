import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import findRecipes from './findRecipes.js';

const app = express();
const PORT = process.env.PORT || 5001;
const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@recipedbcluster.grv4wcj.mongodb.net/recipeDB?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");

    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Server is running.");
    });

    app.post("/find-recipes", async (req, res) => {
        try {
            const selectedIngredients = req.body.selectedIngredients;
            const results = await findRecipes(selectedIngredients);
            res.json(results);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch recipes." });
        }
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error("Failed to connect to MongoDB:", err);
});