const Message = require("../models/Message.js");

async function createMessage(
  content,
  reciverId,
  senderId,
  senderImage,
  senderUsername
) {
  const newMessage = await Message.create({
    content,
    reciverId,
    senderId,
    senderImage,
    senderUsername,
  });
  return newMessage;
}

module.exports = {
  createMessage,
};
