const { Ingredients, Ingredient } = require('../models');

module.exports.findIngredient = async(req, res, next) => {
    try {
        const { body: { ingredients } } = req;

        const ingredientsArray = [];

        ingredients.forEach(async (currentIngredient) => {
            const ingredientObject = await Ingredient.findOne({
                name: currentIngredient
            });

            console.log();
            //ingredientsArray.push(...ingredientObject['_id']);
        });

        console.log(ingredientsArray);
    } catch (error) {
        next(error);
    }
}