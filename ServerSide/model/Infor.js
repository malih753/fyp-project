const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    phone_no:{
        type:Number
    },
    email:{
        type:String
    },
    street:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    zipcode:{
        type:Number
    } 

})

const Info= mongoose.model('Info',InfoSchema);

module.exports = Info;