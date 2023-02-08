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

async function getPostsById(id) {
  const posts = await Post.find({ ownerId: id });
  return posts;
}

module.exports = {
  getAllPosts,
  createPost,
  getPostsById,
};
