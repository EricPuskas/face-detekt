const express = require("express");
const router = express.Router();
const { detectFaces } = require("../controllers/image");
const passport = require("passport");

// @route   PUT api/image/:id
// @desc    Detect Faces in image.
// @access  Public
router.post("/:id", detectFaces);

module.exports = router;
