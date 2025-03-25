// Importing Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const PetRouter = require('./Routes/PetRouter');

// fetching port from env variable
// const PORT = process.env.PORT || 8080;

// Setting up Middleware
app.use(express.json()); // To parse incoming JSON requests 
app.use(cors({
  origin: ['http://localhost:3000'], // Allow frontend running on port 3001
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));// Setting up Routing 
app.use('/auth', AuthRouter); 
app.use('/pets', PetRouter);

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  

// Starting the server
app.listen(8080, () => {
    console.log(`Server is running on Port 8080`);
});
