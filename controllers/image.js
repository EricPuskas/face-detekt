const db = require("../config/db");
const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

exports.detectFaces = async (req, res) => {
  try {
    const { input } = req.body;
    let data = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input);
    if (data.status.code === 10000) {
      // If the response is Okay
      let entries = await db.any(
        "UPDATE users SET entries = entries + 1 WHERE id = $1 RETURNING entries",
        [req.params.id]
      );
      let outputs = data.outputs;
      res.json({ outputs, entries });
    } else {
      return res.status(400).json("unable to work with API");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
