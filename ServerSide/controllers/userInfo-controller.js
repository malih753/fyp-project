"use strict";

const catchAsyncFunction = require("../middlewares/catchAsyncFun");
const InfoModel = require("../model/Infor");

exports.Info = catchAsyncFunction(async (req, res) => {
<<<<<<< HEAD
  try {
    const user_id = req.user._id;
    // console.log(user_id)
const {product} = req.body
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
      package_name,
      price,
      message,
    } = product;

    console.log("package name", package_name, message);
    console.log("price", price);
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
      package_name,
      price,
      message,
    });

    return res
      .status(201)
      .json({ message: "Info created successfully", newInfo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
=======

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
            package_name,
            price
        } = req.body;

        console.log("package name", package_name)
        console.log("price", price)
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
            package_name,
            price
        });

        return res.status(201).json({ message: "Info created successfully", newInfo })

    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
});

exports.getInfo = catchAsyncFunction(async (req, res) => {
  try {
    console.log(req.user);
    const userId = req.user._id;
    const info = await InfoModel.findOne({ user_id: userId }).sort({
      createdAt: -1,
    });

    return res
      .status(200)
      .json({ message: "info found successfully", info, success: true });
  } catch (e) {
    res.status(500).json({ message: e.message });
    console.log("error", e);
  }
});

exports.getMyOrders = catchAsyncFunction(async (req, res) => {
  try {
    console.log(req.user);
    const userId = req.user._id;
    const info = await InfoModel.find({ user_id: userId });

    return res
      .status(200)
      .json({ message: "info found successfully", info, success: true });
  } catch (e) {
    res.status(500).json({ message: e.message });
    console.log("error", e);
  }
});

<<<<<<< HEAD
exports.getTopSellingPackages = catchAsyncFunction(async (req, res) => {
  const packages = await InfoModel.aggregate([
    {
      $group: {
        _id: {
          packageName: "$package_name",
          price: "$price",
        },
        count: { $sum: 1 },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
  ]);

  console.log(packages);

  const topPackages = packages.map(({ _id: { packageName, price } }) => ({
    title: packageName,
    price,
  }));

  return res.status(200).json({
    message: "Packages found successfully",
    package: topPackages,
    success: true,
  });
});

exports.getMessages = catchAsyncFunction(async (req, res) => {
  const messages = await InfoModel.aggregate([
    {
      $match: {
        message: { $exists: true },
      },
    },
    
    {
      $project: {
        // Project desired fields
        _id:0,
        message: 1, // Include message field
        name: 1, // Include name field (assuming it exists)
        test_name: 1, // Include testName field (assuming it exists)
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
  ]);

  console.log(messages);

  // const transformedMessages = messages.map(({ _id }) => ({
  //   message: _id,
  // }));

  return res.status(200).json({
    message: "Messages found successfully",
    messages,
    success: true,
  });
});
=======
exports.getMyOrders = catchAsyncFunction(async (req, res) => {
    try {

        console.log(req.user)
        const userId = req.user._id;
        const info = await InfoModel.find({ user_id: userId })

        return res.status(200).json({ message: "info found successfully", info, success: true });

    } catch (e) {

        res.status(500).json({ message: e.message });
        console.log('error', e);
    }
})
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
