const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    phone_no: {
      type: Number,
    },
    email: {
      type: String,
    },
    street: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    zipcode: {
      type: Number,
    },
<<<<<<< HEAD
    package_name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    message: String,
  },
  { timestamps: true }
);
=======
    package_name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

},{timestamps:true})
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17

const Info = mongoose.model("Info", InfoSchema);

module.exports = Info;
