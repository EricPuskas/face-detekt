const express = require("express");
const router = express.Router();
const { getProfile, getRanking } = require("../controllers/profile");
const passport = require("passport");

// @route   GET api/profile/:id
// @desc    Update profile info
// @access  Public
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getProfile
);

// @route   GET api/profile/ranking/:top
// @desc    GET RANKING
// @access  Public
router.get("/ranking/:top", getRanking);

module.exports = router;
