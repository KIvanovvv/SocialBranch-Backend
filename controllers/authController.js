const {
  register,
  login,
  findUserById,
} = require("../services/authServices.js");
const bcrypt = require("bcrypt");

const authController = require("express").Router();

authController.post("/register", async (req, res) => {
  try {
    const { email, password, username, imageUrl } = req.body;
    const token = await register(email, password, username, imageUrl);

    res.json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

authController.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    console.log(token);
    res.json(token);
  } catch (error) {
    res.status(401).json({ message: "Invalid username or password" });
  }
});
authController.get("/logout", async (req, res) => {
  res.status(204).end();
});

authController.post("/change", async (req, res) => {
  const { _id, username } = req.body;
  const user = await findUserById(_id);
  user.username = username;
  await user.save();
  res.json(user);
});

authController.post("/change/password", async (req, res) => {
  const { _id, password } = req.body;
  const user = await findUserById(_id);
  user.hashedPassword = await bcrypt.hash(password, 10);
  await user.save();
  res.json(user);
});

authController.post("/change/image", async (req, res) => {
  const { _id, imageUrl } = req.body;
  const user = await findUserById(_id);
  user.imageUrl = imageUrl;
  await user.save();
  res.json(user);
});

authController.post("/change/description", async (req, res) => {
  const { _id, description } = req.body;
  const user = await findUserById(_id);
  user.description = description;
  await user.save();
  res.json(user);
});

module.exports = authController;
