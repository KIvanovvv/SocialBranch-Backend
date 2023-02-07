const {
  createComment,
  getCommentByPostId,
} = require("../services/commentService.js");
const { getAllPosts, createPost } = require("../services/postServices.js");

const postController = require("express").Router();

postController.get("/", async (req, res) => {
  const posts = await getAllPosts();

  res.json(posts);
});

postController.post("/", async (req, res) => {
  const { content, imageUrl, ownerUsername, ownerId } = req.body;
  const newPost = await createPost(content, imageUrl, ownerUsername, ownerId);
  console.log(req.headers["x-authorization"]);
  res.json(newPost);
});

postController.post("/comments", async (req, res) => {
  const { content, username, postId, imageUrl } = req.body;
  const comment = await createComment(content, username, postId, imageUrl);
  res.json(comment);
});

postController.get("/comments/:id", async (req, res) => {
  const comments = await getCommentByPostId(req.params.id);
  res.json(comments);
});

module.exports = postController;

// const {
//   create,
//   getAllItems,
//   getItemById,
//   getItemsByOwnerId,
// } = require("../services/furnitureServices.js");

// const dataController = require("express").Router();

// dataController.get("/catalog", async (req, res) => {
//   let items = [];
//   if (req.query.where) {
//     const ownerId = JSON.parse(req.query.where.split("=")[1]);
//     items = await getItemsByOwnerId(ownerId);
//   } else {
//     items = await getAllItems();
//   }
//   res.json(items);
// });

// dataController.post("/catalog", async (req, res) => {
//   try {
//     const newItem = await create(req.body, req.user._id);
//     res.json(newItem);
//   } catch (error) {}
// });

// dataController.get("/catalog/:id", async (req, res) => {
//   const item = await getItemById(req.params.id);
//   console.log(req.user);
//   res.json(item);
// });

// dataController.put("/catalog/:id", async (req, res) => {
//   const item = await getItemById(req.params.id);
//   item.make = req.body.make;
//   item.model = req.body.model;
//   item.year = req.body.year;
//   item.description = req.body.description;
//   item.price = req.body.price;
//   item.imageUrl = req.body.img;
//   item.material = req.body.material;

//   await item.save();
//   res.json(item);
// });

// dataController.delete("/catalog/:id", async (req, res) => {
//   const item = await getItemById(req.params.id);
//   await item.delete();
// });

// module.exports = dataController;
