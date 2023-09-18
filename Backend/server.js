const dotenv = require("dotenv");
dotenv.config({ path: './.env' });

console.log("Debug: PORT from .env:", process.env.PORT);
console.log("Debug: MONGO_URI from .env:", process.env.MONGO_URI);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB:', err);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Now you are cooking with gas!`);
    console.log(`Server is up at http://localhost:${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
