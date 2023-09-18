const dotenv = require("dotenv");
dotenv.config({ path: './.env' });




const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB:', err);
});

const port = process.env.PORT || 4242;
console.log("Debug: PORT from .env:", process.env.PORT);
console.log("Debug: MONGO_URI from .env:", process.env.MONGO_URI);

app.listen(port, () => {
    console.log(`Now you are cooking with gas!`);
    console.log(`Server is up at http://localhost:${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
