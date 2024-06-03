'use strict'

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose');

const cookieParser = require("cookie-parser")

require('dotenv').config()
const dbConfig = require('./DBconnection')
const PORT = process.env.PORT || 2000;
const corsOptions = { origin: process.env.URL || 'http://localhost:5173',credentials:true };
const app = express()
app.use(express.json())
app.use(cors(corsOptions));
app.use(cookieParser())


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
// routers

// User routes
const authRouter = require('./routes/auth-routes');
app.use('/api/v1/auth', authRouter)

// Info routes
const infoRouter = require('./routes/info.routes');
app.use('/api/v1/info', infoRouter)

// Admin routes
const newUserRouter = require('./routes/newUser-routes');
app.use('/api/v1/getNewUser', newUserRouter)

// Collection routes
const collectionRouter = require('./routes/collection.route');
app.use('/api/v1/collection', collectionRouter)

app.use(express.static('public'));


app.get("/", (req, res) => {
    res.send("Nice!!!!!!")
})


app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
})


