const pgp = require("pg-promise")();
let config;
if (process.env.NODE_ENV === "production") {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  };
} else {
  config = {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    port: process.env.POSTGRES_PORT,
    password: process.env.POSTGRES_PASSWORD
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
