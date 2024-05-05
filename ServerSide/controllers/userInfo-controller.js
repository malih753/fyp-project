"use strict";
const express = require("express");
const router = express.Router();
router.use(express.json());

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
const InfoModel = require('../model/Infor');
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


exports.Info = catchAsyncFunction(async (req, res) => {
    console.log("info data")
    try {
        console.log("log request", req.body);
        const { 
            name, 
            age,
            gender,
            phone_no,
            email,
            street,
            state,
            city,
            country,
            zipcode, 
           } = req.body;
           console.log(name, 
            age,
            gender,
            phone_no,
            email,
            street,
            state,
            city,
            country,
            zipcode )
        // Create user in MongoDB
        const newInfo = await InfoModel.create({
            name, 
            age,
            gender,
            phone_no,
            email,
            street,
            state,
            city,
            country,
            zipcode, 
           
        });
        await newInfo.save();
        res.status(201).json(newInfo)
        res.status(201).send({ message: "Info created successfully", user: newInfo });
    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
});

exports.getInfo = catchAsyncFunction(async (req,res)=>{
    try{
        const userId = req.InfoModel?._id;  
        const user = await InfoModel.findById(userId);
     
        res.json(user);

    }catch (e){

        res.status(500).json({message:e.message});
        console.log('error',e);
    }
})


