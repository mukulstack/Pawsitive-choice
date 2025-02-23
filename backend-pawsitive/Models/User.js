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
        unique: true, 
        validate: {
            validator: function(v) {
                // Simple validation for mobile number format 
                return /^\+?\d{10,15}$/.test(v);
            },
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }
});

// Creating a user model from the UserSchema
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
