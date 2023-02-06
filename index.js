const runDB = require("./config/database.js");
const app = require("./config/express.js");
const authController = require("./controllers/authController.js");
const dataController = require("./controllers/dataController.js");

app.use("/users", authController);
// app.use("/data", dataController);

start();
async function start() {
  app.listen(3030, () => console.log(`Server is running on port 3000...`));
  runDB();
}
