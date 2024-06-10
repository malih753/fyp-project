
const catchAsyncFun = require("../middlewares/catchAsyncFun");
const cloudinaryUpload = require("../cloudinary");
const User = require("../model/User");
const Collection = require("../model/collection.model");``

exports.createCollection = catchAsyncFun(async (req, res) => {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({ message: "All fields are required to fill" });
  }

  const isUserExist = await User.findOne({ username });
  if (!isUserExist) {
    return res
      .status(400)
      .json({ message: "collection with this username doesn't exit" });
  }

  const imagePath = req.file.path;

  console.log(imagePath);

  const image = await cloudinaryUpload(imagePath);

  const newCollection = await Collection.create({
    username,
    message,
    image,
  });

  return res
    .status(201)
    .json({ message: "collection created successfully", newCollection });
});

exports.getCollections = catchAsyncFun(async (req, res) => {
  const collections = await Collection.find({});
  return res
    .status(200)
    .json({ message: "collections found successfully", collections });
});
