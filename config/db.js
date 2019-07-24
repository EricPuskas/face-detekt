const pgp = require("pg-promise")();
let config;
if (process.env.NODE_ENV === "production") {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  };
} else {
  config = {
    host: "localhost",
    port: 5432,
    database: "smarte",
    user: process.env.DB_USER,
    password: process.env.DB_PW
  };
}

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
