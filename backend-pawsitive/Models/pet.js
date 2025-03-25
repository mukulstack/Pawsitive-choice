const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    type: {
        type: String, // Dog, Cat, etc.
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String, // Store Image URL
        required: true
    },
});

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;
