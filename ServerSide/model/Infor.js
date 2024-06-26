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

const Info = mongoose.model("Info", InfoSchema);

module.exports = Info;
