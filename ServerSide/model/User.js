const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        default: null,
    },
    lastname: {
        type: String,
        default: null,
    },
    Address: {
        type: String,
    },
    city: {
        type: String,

    },
    state: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: null,
        required: true
    },
    phone_no: {
        type: Number,

    },
    role:{
        type:String,enum:['User','Admin','Lab User'] , default : 'User'
    }
},{timestamps:true});

userSchema.methods.generateAuthToken = function () {

    return jwt.sign({
        _id: this._id
     
    }, process.env.SECRET_KEY,
        {
            expiresIn: "2d"
        });

}

const User = mongoose.model('user', userSchema);



module.exports = User
