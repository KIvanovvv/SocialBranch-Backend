const {
  register,
  login,
  findUserById,
  createToken,
  findUserByQuery,
} = require("../services/authServices.js");
const bcrypt = require("bcrypt");

const authController = require("express").Router();

authController.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    let { imageUrl } = req.body;
    if (!imageUrl) {
      imageUrl = "";
    }
    const token = await register(email, password, username, imageUrl);

    res.json(token);
  } catch (error) {
    res.status(403).json(error.message);
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
  const token = createToken(user);
  res.json(token);
});

authController.post("/change/password", async (req, res) => {
  const { _id, password } = req.body;
  const user = await findUserById(_id);
  user.hashedPassword = await bcrypt.hash(password, 10);
  await user.save();
  const token = createToken(user);
  res.json(token);
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
authController.post("/moods/happy", async (req, res) => {
  const { _id, imageUrl } = req.body;
  const user = await findUserById(_id);
  user.moods.happy = imageUrl;
  user.markModified("moods");
  await user.save();
  res.json(user);
});
authController.post("/moods/sad", async (req, res) => {
  const { _id, imageUrl } = req.body;
  const user = await findUserById(_id);
  user.moods.sad = imageUrl;
  user.markModified("moods");
  await user.save();
  res.json(user);
});
authController.post("/moods/angry", async (req, res) => {
  const { _id, imageUrl } = req.body;
  const user = await findUserById(_id);
  user.moods.angry = imageUrl;
  user.markModified("moods");
  await user.save();
  res.json(user);
});

authController.get("/find/:id", async (req, res) => {
  try {
    const user = await findUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

authController.post("/messages", async (req, res) => {
  try {
    const { _id, message, senderData } = req.body;
    const user = await findUserById(_id);
    user.messages.push({
      message,
      ownerId: senderData._id,
      ownerUsername: senderData.username,
      ownerImg: senderData.imageUrl,
      isViewed: false,
    });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

authController.get("/search/:query", async (req, res) => {
  try {
    console.log(req.params.query);
    const users = await findUserByQuery(req.params.query);
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = authController;
