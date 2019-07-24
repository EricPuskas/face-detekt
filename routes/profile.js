const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profile");
const passport = require("passport");

// @route   PUT api/profile/:id
// @desc    Update profile info
// @access  Public
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getProfile
);

module.exports = router;
