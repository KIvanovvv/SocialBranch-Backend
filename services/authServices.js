const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretStr = "asdawdaafwaea2321ad";

async function register(email, password,username,imageUrl) {
  try {
    const existing = await User.findOne({ email: email }).collation({
      locale: "en",
      strength: 2,
    });
    if (existing) {
      throw new Error(`Email is already in use`);
    }
    const newUser = await User.create({
      email,
      hashedPassword: await bcrypt.hash(password, 10),
      username,
      imageUrl
    });
    return createToken(newUser)
  } catch (error) {
    throw new Error(error.message);
  }
}

async function login(email, password) {
  try {
    const match = await User.findOne({ email: email });
    if (!match) {
      throw new Error();
    }
    const isValid = await bcrypt.compare(password, match.hashedPassword);
    if (!isValid) {
      throw new Error();
    }
    return  createToken(match)
   
  } catch (error) {
    throw new Error(`Invalid username or password`);
  }
}

function createToken(userData) {
  const payload={
    email:userData.email,
    _id:userData._id,
    username:userData.username,
    imageUrl:userData.imageUrl
  }
  return {
    _id:userData._id,
    email:userData.email,
    username:userData.username,
    imageUrl:userData.imageUrl,
    accessToken:jwt.sign(payload,secretStr)
  }
}

module.exports = {
  register,
  login,
};
