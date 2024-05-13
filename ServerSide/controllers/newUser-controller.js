"use strict";

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
const UserModel = require('../model/User');

exports.newUser = catchAsyncFunction(async (req, res) => {

    try {
        const {
            firstname,
            password,
            email,
            phone_no,
            role
        } = req.body;


        // Create user in MongoDB
        const newUser = await UserModel.create({
            firstname,
            password,
            email,
            phone_no,
            role

        });

        return res.status(201).json({ message: "Info created successfully", newUser })

    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
});

exports.getNewUsers = catchAsyncFunction(async (req, res) => {
    try {
        const newUsers = await UserModel.find({});

        return res.status(200).json({ message: "info found successfully", newUsers, success: true });

    } catch (e) {

        res.status(500).json({ message: e.message });
        console.log('error', e);
    }
})


