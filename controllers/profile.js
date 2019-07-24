// Load Database
const db = require("../config/db");

exports.getProfile = async (req, res) => {
  const { id } = req.params;
  try {
    let profile = await db.one("SELECT * FROM users WHERE id = $1", [id]);
    profile.id ? res.json(profile) : res.status(404).json("Not found");
  } catch (err) {
    console.log(err);
    res.status(404).json("Not found");
  }
};
