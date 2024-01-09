const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    servingSize: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    }, 
    steps: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
