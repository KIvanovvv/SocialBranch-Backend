const {
  createMessage,
  getUserMessages,
  getMessageById,
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

messsageController.post("/viewed", async (req, res) => {
  const { msgId } = req.body;
  const message = await getMessageById(msgId);
  message.isViewed = true;
  await message.save();
  res.status(200).json(message);
});

module.exports = messsageController;
