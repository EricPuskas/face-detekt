const pgp = require("pg-promise")();
const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: true
};

let db;
const connectDB = async () => {
  try {
    db = pgp(config);
    console.log("Postgres connected.");
    return db;
  } catch (error) {
    console.error(err.message);
    //Exit process with failure.
    process.exit(1);
  }
};

connectDB();
module.exports = db;
