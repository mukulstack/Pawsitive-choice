// Importing Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');

// fetching port from env variable
const PORT = process.env.PORT || 8080;

// Setting up Middleware
app.use(express.json()); // To parse incoming JSON requests 
app.use(cors()); // for cross-origin requests

// Setting up Routing 
app.use('/auth', AuthRouter); 

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
});
