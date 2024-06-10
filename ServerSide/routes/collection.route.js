const express = require("express");
const IsAuthenticated = require("../middlewares/authMiddleWare");
const isAdmin = require("../middlewares/LabAdmin");
const CollectionController = require("../controllers/collection.controller");
const upload = require("../middlewares/multer.middleware");

const router = express.Router();

router.post(
  "/create-collection",
  IsAuthenticated,
  isAdmin,
  upload.single("image"),
  CollectionController.createCollection
);

router.get(
  "/get-collection",
  IsAuthenticated,
  isAdmin,
  CollectionController.getCollections
);

module.exports = router;
