const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const NewuserSchema = new mongoose.Schema({

    firstname: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        default: null,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_no: {
        type: Number,
    },
    role:{
        type:String
    }
},{timestamps:true});

const newUser = mongoose.model('newUser', NewuserSchema);
module.exports = newUser
