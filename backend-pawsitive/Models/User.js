const mongoose = require('mongoose');

// Creating object of Schema class of mongoose
const Schema = mongoose.Schema;

// Creating user schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        postalCode: {
            type: String,
        },
        country: {
            type: String,
        }
    }
});

// Creating a user model from the UserSchema
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
