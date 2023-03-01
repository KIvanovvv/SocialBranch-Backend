const { createMessage } = require("../services/messageService.js");

const messsageController = require("express").Router();

messsageController.post("/", async (req, res) => {
  const { content, reciverId, senderId, senderImage, senderUsername } =
    req.body;
  const newMessage = await createMessage(
    content,
    reciverId,
    senderId,
    senderImage,
    senderUsername
  );
  return newMessage;
});

module.exports = messsageController;
