// importing dependencies:
const { signupValidation, loginValidation } = require('../Middlewares/Validation');
const { signup, login } = require('../Controllers/AuthController'); // ensure signup is a function

// in built function used to create modular and mountable route handlers
const router = require('express').Router();

// Defining login Route
router.post('/login', loginValidation, login);

// Defining signup route
// /signup: handler will be trigger when user sends post request on it
// signupValidation: middleware which will execute req res cycle
// signup: controller function, adds user
router.post('/signup', signupValidation, signup);

module.exports = router;
