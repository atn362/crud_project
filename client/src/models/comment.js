const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: { 
        type: String, 
        required: true 
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
},{
    timestamps: true,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;