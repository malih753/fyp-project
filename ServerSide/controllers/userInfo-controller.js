"use strict";
const express = require("express");
const router = express.Router();
router.use(express.json());

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const InfoModel = require('../model/Infor');

exports.Info = catchAsyncFunction(async (req, res) => {

    try {

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


