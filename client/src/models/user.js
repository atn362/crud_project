const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },

});

const User = mongoose.model("User", userSchema);

module.exports = User;