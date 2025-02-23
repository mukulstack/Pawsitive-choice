// library to manage database connections
const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => {
        console.log("MongoDB Connected... ");
    }).catch((err) => {
        console.log("MonogDB Connection Error: ", err);
    })
