const mongoose = require("mongoose");

const connStr = "mongodb://localhost:27017/socialbranch";

async function runDB() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(connStr);
  console.log(`Database is connected`);
}

module.exports = runDB;
