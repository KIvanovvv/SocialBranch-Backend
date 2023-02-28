const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  username: { type: String, required: true },
  imageUrl: { type: String },
  description: { type: String, default: "" },
  moods: { type: Object, default: { happy: "", sad: "", angry: "" } },
  messages: { type: Array, default: [] },
});

userSchema.index(
  { email: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
