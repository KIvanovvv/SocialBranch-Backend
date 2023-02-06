const { register, login } = require("../services/authServices.js");

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

module.exports = authController;
