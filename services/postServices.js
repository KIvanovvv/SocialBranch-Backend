const Post = require("../models/Post.js");

async function getAllPosts() {
  const posts = await Post.find({});
  return posts;
}

async function createPost(content, imageUrl, ownerUsername, ownerId) {
  try {
    const newPost = await Post.create({
      content,
      imageUrl,
      ownerUsername,
      ownerId,
    });
    return newPost;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllPosts,
  createPost,
};
