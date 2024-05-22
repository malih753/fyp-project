"use strict";

const catchAsyncFunction = require("../middlewares/catchAsyncFun");
const UserModel = require("../model/User");

exports.newUser = catchAsyncFunction(async (req, res) => {
  try {
    const { firstname, password, email, phone_no, role } = req.body;

    // Create user in MongoDB
    const newUser = await UserModel.create({
      firstname,
      password,
      email,
      phone_no,
      role,
    });

    return res
      .status(201)
      .json({ message: "Info created successfully", newUser });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
});

exports.getNewUsers = catchAsyncFunction(async (req, res) => {
  const newUsers = await UserModel.find({});

  return res.status(200).json({
    message: "Admin users found successfully",
    newUsers,
    success: true,
  });
});

exports.createLabUser = catchAsyncFunction(async (req, res) => {
  const { firstname, password, email, phone_no, role, test_name } = req.body;

  // Create user in MongoDB
  const newUser = await UserModel.create({
    firstname,
    password,
    email,
    phone_no,
    role,
    test_name,
  });

  return res
    .status(201)
    .json({ message: "Lab user created successfully", newUser });
});

exports.getLabUsers = catchAsyncFunction(async (req, res) => {
  const users = await UserModel.find({});

  const transformedUsers = users.filter((user) => user.test_name);

  return res.status(200).json({
    message: "Lab users found successfully",
    transformedUsers,
    success: true,
  });
});

exports.deleteLabUser = catchAsyncFunction(async (req, res) => {
  const { id } = req.params;

  const user = await UserModel.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ message: "user not found", success: false });
  }

  return res.status(200).json({ message: "Lab User deleted successfully" });
});

exports.editLabUser = catchAsyncFunction(async (req, res) => {
  const { id } = req.params;
  const { firstname, password, email, phone_no, role, test_name } = req.body;

  const user = await UserModel.findById(id);

  if (!user) {
    return res.status(404).json({ message: "user not found", success: false });
  }
  if (firstname) user.firstname = firstname;
  if (password) user.password = password;
  if (email) user.email = email;
  if (phone_no) user.phone_no = phone_no;
  if (role) user.role = role;
  if (test_name) user.test_name = test_name;
  await user.save();

  return res.status(200).json({ message: "Lab User updated successfully" });
});
