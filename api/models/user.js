const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  id: Number,
  role: String,
  name: String,
  email: String,
  password: String,

  date: {
    type: String,
    default: Date.now()
  }
});

const User = mongoose.model('User', UserSchema);

module.exports =  User;
