'use strict'

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

require('dotenv').config()
const dbConfig = require('./DBconnection')
const PORT = process.env.PORT || 4000;
const corsOptions = { credentials: true, origin: process.env.URL || '*' };
const app = express()
app.use(express.json())
app.use(cors(corsOptions));
//dd connection 
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
// routers
const authRouter = require('./routes/auth-routes');

app.use('/api/v1', authRouter)


app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
})