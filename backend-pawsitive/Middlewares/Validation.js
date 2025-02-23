// importing validation library
const Joi = require('joi');

// Signup Validation Middleware
const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        mobile: Joi.string().min(10).max(10).pattern(/^[0-9]+$/).required(),
        password: Joi.string().min(6).max(100).required()
        
    });
    const { error } = schema.validate(req.body);
    if (error) {
        const errorMessages = error.details.map(detail => ({
            field: detail.path[0],  // Field name causing error
            message: detail.message
        }));
        return res.status(400).json({ message: "Bad Request 400", errors: errorMessages });
    }
    next(); // If validation passes, continue to  controller
};

// Login Validation Middleware
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        const errorMessages = error.details.map(detail => ({
            field: detail.path[0],  
            message: detail.message
        }));
        return res.status(400).json({ message: "Bad Request 400", errors: errorMessages });
    }
    next(); // If validation passes, continue to controller
}

module.exports = {
    signupValidation,
    loginValidation
};
