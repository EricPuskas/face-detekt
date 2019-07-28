// Load Database
const db = require("../config/db");

exports.getProfile = async (req, res) => {
  const { id } = req.params;
  try {
    let profile = await db.one("SELECT * FROM users WHERE id = $1", [id]);
    profile.id ? res.json(profile) : res.status(404).json("Not found");
  } catch (err) {
    res.status(404).json("Not found");
  }
};

exports.getRanking = async (req, res) => {
  try {
    let top = req.params.top;
    let ranking = await db.any(
      "SELECT * FROM users ORDER BY entries DESC LIMIT $1",
      [top]
    );
    ranking.length ? res.json(ranking) : res.status(404).json("Not found");
  } catch (err) {
    res.status(404).json("Not found");
  }
};
