"use strict";

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
const InfoModel = require('../model/Infor');

exports.Info = catchAsyncFunction(async (req, res) => {

    try {

        const user_id = req.user._id
        // console.log(user_id)

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
            user_id,

        });

        return res.status(201).json({ message: "Info created successfully", newInfo })

    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
});

exports.getInfo = catchAsyncFunction(async (req, res) => {
    try {

        console.log(req.user)
        const userId = req.user._id;
        const info = await InfoModel.findOne({ user_id: userId }).sort({createdAt:-1});

        return res.status(200).json({ message: "info found successfully", info, success: true });

    } catch (e) {

        res.status(500).json({ message: e.message });
        console.log('error', e);
    }
})


