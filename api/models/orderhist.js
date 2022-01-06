const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const OrderHistSchema = new Schema({
    user_id: String,
    products: [{
      dish_id: String,
      name: String,
      quantity: Number,
      unit_price: String
    }],
    total_price: String,
    date: {
      type: String,
      default: Date.now()
    }
});

const OrderHist = mongoose.model('OrderHist', OrderHistSchema);

module.exports =  OrderHist;
