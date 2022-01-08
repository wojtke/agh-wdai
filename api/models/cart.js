const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CartSchema = new Schema({
    _id: String,
    products: [{
        dish_id: String,
        name: String,
        quantity: Number,
        unit_price: {
            value: Number,
            currency: String
        },
    }],
    date: {
        type: String,
        default: Date.now()
    }
}, { _id: false } );

const Cart = mongoose.model('Cart', CartSchema);

module.exports =  Cart;
