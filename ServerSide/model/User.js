const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   
    firstname: {  
        type: String,
        default: null,
    },
    lastname: {
        type: String,
        default: null,
    },
    Address:{
        type:String,
        
    },
    city:{
        type:String,
         
    },
    state:{
        type:String,
        
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
    phone_no:{
        type:Number,
        
    },
});

const User = mongoose.model('user', userSchema);  

module.exports = User
