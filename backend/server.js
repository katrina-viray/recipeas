require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/user');

const cors = require('cors');

// make express app
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/user', userRoutes);

// connect to database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen in for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and istening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });