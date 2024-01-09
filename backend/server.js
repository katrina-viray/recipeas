require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipes')

// make express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/recipes', recipeRoutes);

// connect to database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen in for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and istening on port ', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });