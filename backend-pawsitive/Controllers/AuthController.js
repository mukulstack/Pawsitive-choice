// importing dependencies
const UserModel = require('../Models/User'); // user schema
const bcrypt = require('bcrypt'); // package for hashing passwords
const jwt = require('jsonwebtoken');

// Signup: asychronous function to handle signup
// req: request object which contains data sent by the client
// res: response object, used to send response back

const signup = async (req, res) => {
    try{
        // retrieving data from request body
        const {name, email, mobile, password} = req.body;

        // checking if user already exists
        // UserModel.findone query search database
        // await used to wait for query to execute
        const user = await UserModel.findOne({email});

        // if user exists tell to login, user = not-null
        if (user) {
            return res.status(409)
                .json({message: "User exists, You can Log in.", success: false});
        }

        // If no user found, create a new user
        const userModel = new UserModel({name, email, mobile, password});

        // encrypt password
        userModel.password = await bcrypt.hash(password, 10);

        // save user to db
        await userModel.save();

        res.status(201)
            .json({message: "Signup Successful", success: true});

    } catch (err) {
        console.error("Error during signup:", err); // Add this log
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
    
}

const login = async (req, res) => {
    try{
        // retrieving data from request body
        const {email, password} = req.body;

 
        const user = await UserModel.findOne({email});

        const errorMsg = "Authentication failed, email or password is wrong!";
        if (!user) {
            return res.status(403)
                .json({message: errorMsg, success: false});
        }

        const isPassEqual = await bcrypt.compare(password, user.password);

        if (!isPassEqual) {
            return res.status(403)
                .json({message: errorMsg, success: false});        
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )


        res.status(200)
            .json({
                message: "Login Successful", 
                success: true,
                jwtToken,
                email,
                name: user.name
            });

    } catch (err) {
            res.status(500)
                .json({message: "Internal Server Error", success: false});
            
    }
}

module.exports = {
    signup,
    login
}