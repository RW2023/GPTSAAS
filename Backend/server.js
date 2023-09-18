const dotenv = require("dotenv");
dotenv.config({ path: './.env' });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const colors = require("colors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure color themes for different log types
colors.setTheme({
  success: 'green',
  error: 'red',
  debug: 'yellow',
  warn: 'cyan',
  info: ['white', 'bgBlue']
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB'.success);
}).catch(err => {
    console.log(('Failed to connect to MongoDB: ' + err).error);
});

const port = process.env.PORT || 4242;
console.log(("Debug: PORT from .env: " + process.env.PORT).debug);
console.log(("Debug: MONGO_URI from .env: " + process.env.MONGO_URI).debug);

app.listen(port, () => {
    console.log(process.env.DEV.info)
    console.log("Now you are cooking with gas!".success);
    console.log(`Server is up at http://localhost:${port}`.success);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`.debug);
});
