const Comment = require("../models/Comment.js");

async function createComment(content, username, postId,imageUrl) {
  const newComment = await Comment.create({
    content,
    username,
    postId,
    imageUrl
  });
  return newComment
}

async function getCommentByPostId(postId) {
  const comments = await Comment.find({ postId: postId });
  return comments;
}

module.exports = {
  createComment,
  getCommentByPostId,
};
