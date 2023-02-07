const { Schema, model, Types } = require("mongoose");

const newComment = new Schema({
  content: { type: String, required: true },
  postId: { type: Types.ObjectId, required: true },
  username: { type: String, required: true },
  imageUrl : {type:String,required:true}
});

const Comment = model("Comment", newComment);

module.exports = Comment;
