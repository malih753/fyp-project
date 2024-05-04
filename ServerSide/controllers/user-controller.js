"use strict";
const express = require("express");
const router = express.Router();
router.use(express.json());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
let app = express();
let bodyParser = require("body-parser");
const { query } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const UserModel = require('../model/User')



////////// Login user////////////


exports.login = catchAsyncFunction(async (req, res) => {
    try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).send('User not found');
    }
    if (user.password !== req.body.password) {
        return res.status(401).send('Incorrect password');
      }
    
      return res.status(200).json({message:"user Login successfully", success:true});
    
     
    } catch(e){
        console.log(e);
        res.status(500).json('Internal server error',e);
      }

})



 
exports.signUp = catchAsyncFunction(async (req, res) => {
    console.log("log request", req.body);
    try {
        console.log("log request", req.body);
        const { firstname, lastname, email, password } = req.body;
        // if (!firstname || !lastname || !email || !password) {
        //     return res.status(400).send({ message: "All fields are required to fill" }); // Return added
        // }
        const existEmail = await UserModel.findOne({ email });
        if (existEmail) {
            return res.status(400).send({ message: "Email already exists" }); // Return added
        }
        // Create user in MongoDB
        const newUser = await UserModel.create({
            firstname,
            lastname,
            email,
            password
        });
        res.status(201).send({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message }); 
    }
});


