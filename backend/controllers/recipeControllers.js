const Recipe = require('../models/recipeModel');
const mongoose = require('mongoose');

// GET all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({createdAt: -1});
    res.status(200).json(recipes);
};

// GET a single recipe
const getRecipe = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such recipe'});
    }

    const recipe = await Recipe.findById(id);

    if(!recipe){
        return res.status(404).json({error: 'No such recipe.'});
    }

    res.status(200).json(recipe);
};

// CREATE new recipe
const createRecipe = async (req, res) => {
    const {type, title, servingSize, time, ingredients, steps} = req.body;

    let emptyFields = [];

    if(!type){
      emptyFields.push('type');
    }
    if(!title){
      emptyFields.push('title');
      console.log('title')
    }
    if(!servingSize){
      emptyFields.push('servingSize');
    }
    if(!time){
      emptyFields.push('time');
    }
    if(!ingredients){
      emptyFields.push('ingredients');
    }
    if(!steps){
      emptyFields.push('steps');
    }
    if(emptyFields.length > 0){
      return res.status(400).json({ error: 'Please fill in the missing fields.', emptyFields});
    }

    // add new doc to the database
    try{
        const recipe = await Recipe.create({
            type, title, servingSize, time, ingredients, steps});
        res.status(200).json(recipe);
    } catch(error){
        res.status(400).json({error: error.message});
    };
};

// DELETE a recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such recipe'});
    }

    const recipe = await Recipe.findOneAndDelete({_id: id});

    if(!recipe){
        return res.status(404).json({error: 'No such recipe.'});
    }

    res.status(200).json(recipe);
}

// UPDATE a recipe
const updateRecipe = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such recipe'});
    }

    const recipe = await Recipe.findOneAndUpdate({_id: id}, ...req.body);

    if(!recipe){
        return res.status(404).json({error: 'No such recipe.'});
    }

    res.status(200).json(recipe);
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
};