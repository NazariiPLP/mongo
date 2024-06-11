const mongoose = require('mongoose');
const Salad = require('./Salad');

const saladSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: Number,
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }],
    sauce: String,
    dietType: String,
    spicy: Boolean,
    expired: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => {
                if(value >= new Date()) {
                    return true
                } 
                else {
                    return false
                }
            }
            }
        }
    });

const Salad = mongoose.model('Salad', saladSchema);

module.exports = Salad;