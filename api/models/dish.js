const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DishSchema = new Schema({
    name: String,
    desc: String,
    cuisine: String,
    categories: [String],
    price: String,
    ingredients:[String],
    max_orders: Number,
    image_src: [String],
    date: {
        type: String,
        default: Date.now()
    }
});

const Dish = mongoose.model('Dish', DishSchema);

module.exports =  Dish;
