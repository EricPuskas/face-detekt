const db = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET_KEY } = require("../config/keys");

// Load Input Validation
const validateRegisterInput = require("../middleware/validation/register");
const validateLoginInput = require("../middleware/validation/login");

exports.registerUser = async (req, res) => {
  try {
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    let user = await db.any(
      "SELECT * FROM users WHERE email = $1",
      req.body.email
    );

    // Check if user's email already exists
    if (user.length) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      let name = req.body.name;
      let email = req.body.email;
      let password = req.body.password;
      let joined = new Date();
      let salt = await bcrypt.genSalt(10);
      let hash = await bcrypt.hash(password, salt);
      password = hash;

      await db.one(
        "INSERT INTO login(hash,email) VALUES($1, $2) RETURNING email",
        [hash, email]
      );
      await db.one(
        "INSERT INTO users(email, name, joined) VALUES($1, $2, $3) RETURNING *",
        [email, name, joined]
      );

      let foundUser = await db.one("SELECT * FROM users WHERE email = $1", [
        email
      ]);

      const payload = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email
      }; // Create JWT Payload

      // Sign Token                   // Expires in 1 day
      jwt.sign(payload, SECRET_KEY, { expiresIn: 86400 }, (err, token) => {
        res.json({
          success: true,
          token: `Bearer ${token}`
        });
      });
    }
  } catch (err) {
    return res.json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
    let foundUser = await db.one("SELECT * FROM users WHERE email = $1", [
      email
    ]);
    if (!foundUser.id) {
      errors.invalid_auth = "Invalid Credentials";
      return res.status(404).json(errors);
    } else {
      // Find user by email
      db.one("SELECT * FROM login WHERE email = $1", [email]).then(user => {
        // Check Password
        bcrypt.compare(password, user.hash).then(isMatch => {
          if (isMatch) {
            // User Matched
            const payload = {
              id: foundUser.id,
              name: foundUser.name,
              email: foundUser.email
            }; // Create JWT Payload
            // Sign Token                   // Expires in 1 day
            jwt.sign(
              payload,
              SECRET_KEY,
              { expiresIn: 86400 },
              (err, token) => {
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                });
              }
            );
          } else {
            errors.invalid_auth = "Invalid Credentials";
            return res.status(400).json(errors);
          }
        });
      });
    }
  } catch (err) {
    const errors = {};
    errors.invalid_auth = "Invalid Credentials";
    return res.status(404).json(errors);
  }
};

module.exports = exports;
