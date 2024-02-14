const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
        id: Number,
        persons: Number,
        type: String,
        drinks: String,
        itemcount: Number,
});

const UserModel = mongoose.model("foodorderdata", userSchema);
module.exports = UserModel;