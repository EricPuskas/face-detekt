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
      let data = await db.one(
        "INSERT INTO users(email, name, joined) VALUES($1, $2, $3) RETURNING *",
        [email, name, joined]
      );
      res.json(data);
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
    // Find user by email
    db.one("SELECT * FROM login WHERE email = $1", [email]).then(user => {
      // Check for user
      if (!user.id) {
        errors.invalid_auth = "Invalid Credentials";
        return res.status(404).json(errors);
      }

      // Check Password
      bcrypt.compare(password, user.hash).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = {
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
            entries: foundUser.entries
          }; // Create JWT Payload
          // Sign Token                   // Expires in 1 day
          jwt.sign(payload, SECRET_KEY, { expiresIn: 86400 }, (err, token) => {
            console.log(payload);
            res.json(payload);
          });
        } else {
          errors.invalid_auth = "Invalid Credentials";
          return res.status(400).json(errors);
        }
      });
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = exports;
