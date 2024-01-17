const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({ 
    type: {
        type: String,
        //required: true
    },
    title: {
        type: String,
        required: true
    }, 
    servingSize: {
        type: String,
        //required: true
    },
    time: {
        type: String,
        required: true
    }, 
    ingredients: {
      type: [String],
      required: true
    }, 
    steps: {
        type: [String],
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
