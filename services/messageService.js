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
async function getUserMessages(userId) {
  const messages = await Message.find({ reciverId: userId });
  return messages;
}
async function getMessageById(userId) {
  const messages = await Message.findById(userId);
  return messages;
}

module.exports = {
  createMessage,
  getUserMessages,
  getMessageById,
};
