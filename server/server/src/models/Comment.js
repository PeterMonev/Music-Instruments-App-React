const { model, Schema, Types: { ObjectId } } = require('mongoose');

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
        minLength: [10, 'Comment must be between 10 and 300 characters'],
        maxLength: [300, 'Comment must be between 10 and 300 characters']
    },
    instrument: {
        type: ObjectId,
        ref: 'Instrument'
    },
    owner: {
        type: ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const Comment = model('Comment', commentSchema);

module.exports = Comment;