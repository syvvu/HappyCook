require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.xntmd8p.mongodb.net/${process.env.DB}`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Connection error", err));