const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000

dotenv.config({ path: './.env' })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

