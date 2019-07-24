require("dotenv").config();
const { PORT, NODE_ENV } = require("./config/keys");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");
const express = require("express");
const passport = require("passport");
const time = 2500000000; // 1 month

const auth = require("./routes/auth");
const profile = require("./routes/profile");
const image = require("./routes/image");

const app = express();
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(require("prerender-node"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: "10mb", extended: true }));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./middleware/auth")(passport);

app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/image", image);

app.use(express.static("client/build", { maxAge: time }));
app.use((req, res, next) => {
  res.header("Cache-Control", "max-age= 2500000000");
  next();
});

// Serve static assets if in production
if (NODE_ENV === "production") {
  // Set static folder
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listen to Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
