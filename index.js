require("dotenv").config();

const runDB = require("./config/database.js");
const app = require("./config/express.js");
const authController = require("./controllers/authController.js");
const messsageController = require("./controllers/messageController.js");
const postController = require("./controllers/postController.js");

const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send(`Server is running...`);
});

app.use("/users", authController);
app.use("/posts", postController);
app.use("/messages", messsageController);

start();
async function start() {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
  runDB();
}
