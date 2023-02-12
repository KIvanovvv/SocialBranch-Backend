const mongoose = require("mongoose");

const connStr = "mongodb://localhost:27017/socialbranch";

async function runDB() {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database is connected`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = runDB;
