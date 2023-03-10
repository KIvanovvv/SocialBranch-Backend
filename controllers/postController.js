const hasUser = require("../middlewares/hasUser.js");
const {
  createComment,
  getCommentByPostId,
} = require("../services/commentService.js");
const {
  getAllPosts,
  createPost,
  getPostsById,
  getPostsByOwnerId,
  getPostsByQuery,
} = require("../services/postServices.js");

const postController = require("express").Router();

postController.get("/", async (req, res) => {
  const posts = await getAllPosts();

  res.json(posts);
});

postController.post("/", hasUser(), async (req, res) => {
  const { content, imageUrl, ownerUsername, ownerId } = req.body;
  const newPost = await createPost(content, imageUrl, ownerUsername, ownerId);
  res.status(201).json(newPost);
});

postController.post("/comments", hasUser(), async (req, res) => {
  const { content, username, postId, imageUrl } = req.body;
  const comment = await createComment(content, username, postId, imageUrl);
  res.status(201).json(comment);
});

postController.get("/comments/:id", async (req, res) => {
  const comments = await getCommentByPostId(req.params.id);
  res.json(comments);
});
postController.get("/user/:id", async (req, res) => {
  const posts = await getPostsByOwnerId(req.params.id);
  res.json(posts);
});

postController.post("/update", hasUser(), async (req, res) => {
  const { _id, content } = req.body;
  const post = await getPostsById(_id);
  post.content = content;
  await post.save();
  res.json(post);
});

postController.delete("/delete", hasUser(), async (req, res) => {
  const post = await getPostsById(req.body._id);
  await post.delete();
  res.json([]);
});

postController.post("/search", async (req, res) => {
  const { query } = req.body;
  const posts = await getPostsByQuery(query);
  res.json(posts);
});

module.exports = postController;
