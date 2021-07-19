const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stateSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
    },

});

const State = mongoose.model("State", stateSchema);

module.exports = State;