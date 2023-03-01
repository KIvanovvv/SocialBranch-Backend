const {
  createMessage,
  getUserMessages,
} = require("../services/messageService.js");

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
  res.status(200).json(newMessage);
});

messsageController.get("/:id", async (req, res) => {
  const messages = await getUserMessages(req.params.id);
  res.status(200).json(messages);
});

module.exports = messsageController;
