const mongoose = require("mongoose");

const Schema = mongoose.Scema;

const locationScema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    icon: {
        type: String,
    },
    image: {
        type: String,
    },
    rating: {
        type: Number
    },
    userRating: {
        type: Number,
        default: 0
    }
});

const Location = mongoose.model("Location", locationScema);

module.exports = Location;