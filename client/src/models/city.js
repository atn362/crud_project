const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    comments: Array,
    locations: Array,
});

const City = mongoose.model("City", citySchema);

module.exports = City;