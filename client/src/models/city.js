const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    restaurants: Array,
    landmarks: Array,
});

const City = mongoose.model("City", citySchema);

module.exports = City;