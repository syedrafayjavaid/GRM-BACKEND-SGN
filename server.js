const express = require('express')
const app = express()
const dotenv = require('dotenv');
const port = 3000;
const bodyParser = require('body-parser')
const connectDB = require('./config/db')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())



// load env variables
dotenv.config({ path: "./config/config.env" });


// Connect with database
connectDB();


// Route Files
const users = require("./routes/user");


// Mount routes
app.use("/api/v1/user", users);



app.listen(port, () => {
    console.log(`The GRM App listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send(`The GRM App is live on port ${port}`)
})
