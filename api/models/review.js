const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
  dish_id: String,
  user_id: String,
  title: String,
  body: String,
  rating: Number,

  date: {
    type: String,
    default: Date.now()
  }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports =  Review;
