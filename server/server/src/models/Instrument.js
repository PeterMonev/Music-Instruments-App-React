const { model, Schema, Types: { ObjectId } } = require('mongoose');

const instrumenSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [3, 'Title must be between 3 and 30 characters'],
        maxLength: [30, 'Title must be between 3 and 30 characters']
    },
    category: {
        type: String,
        required: true,
        enum: ['Guitars','Drums','Keyboards','Brass'],
    },
    address: {
        type: String,
        required: true,
        minLength: [10, 'Address must be between 10 and 40 characters'],
        maxLength: [40, 'Address must be between 10 and 40 characters']
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\/.+/, 'ImageUrl is not valid!']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number']
    },
    year: {
        type: Number,
        required: true,
        min: [1901, 'Year must be between 1901 and 2023'],
        max: [2023, 'Year must be between 1901 and 2023']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Descripton must be between 10 and 300 characters'],
        maxLength: [300, 'Descripton must be between 10 and 300 characters']
    },
    comments: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    owner: {
        type: ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const Instrumen = model('Instrumen', instrumenSchema);

module.exports = Instrumen;