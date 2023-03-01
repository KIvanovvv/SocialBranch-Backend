const { Schema, model, Types } = require("mongoose");

const newMessage = new Schema({
  content: { type: String, required: true },
  reciverId: { type: Types.ObjectId, required: true },
  senderUsername: { type: String, required: true },
  senderImage: { type: String, required: true },
  senderId: { type: Types.ObjectId, required: true },
});

const Message = model("Message", newMessage);

module.exports = Message;
