const mongoose = require('mongoose');
const Salad = require('./Salad');

const IngredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
});

const Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;