const db = require("../config/db");
const Clarifai = require("clarifai");
const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

// Load Input Validation
const validateImageInput = require("../middleware/validation/image");

exports.detectFaces = async (req, res) => {
  try {
    const { errors, isValid } = validateImageInput(req.body);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { input } = req.body;
    // Check if input exists in database
    let image = await db.any("SELECT * FROM images WHERE url = $1", [input]);

    // Not found, add it to the DB
    if (!image.length) {
      await db.one("INSERT INTO images(url) VALUES($1) RETURNING url", [input]);
      let data = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input);
      if (data.status.code === 10000) {
        let score = data.outputs[0].data.regions.length;
        // If the response is Okay
        let entries = await db.any(
          "UPDATE users SET entries = entries + $1 WHERE id = $2 RETURNING entries",
          [score, req.params.id]
        );
        let outputs = data.outputs;
        res.json({ outputs, entries });
      } else {
        return res.status(400).json("unable to work with API");
      }
    } else {
      errors.invalid_input = "We already scanned that image! Try another one.";
      return res.status(400).json(errors);
    }
  } catch (error) {
    const errors = {};
    errors.invalid_input = "Invalid URL provided.";
    return res.status(400).json(errors);
  }
};
