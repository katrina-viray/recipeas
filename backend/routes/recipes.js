const express = require('express');
const {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
} = require('../controllers/recipeControllers');

const router = express.Router();

// GET all recipes
router.get('/', getRecipes);

// GET a single recipe
router.get('/:id', getRecipe);
//POST a new recipe
router.post('/', createRecipe);

//DELETE a new recipe
router.delete('/:id', deleteRecipe);

// UPDATE a new recipe
router.patch('/:id', updateRecipe);

module.exports = router;