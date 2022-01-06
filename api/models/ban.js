const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BanSchema = new Schema({
    _id: String,
    banned: Boolean,
    date: {
        type: String,
        default: Date.now()
    }
},  { _id: false });

const Ban = mongoose.model('Ban', BanSchema);

module.exports =  Ban;
