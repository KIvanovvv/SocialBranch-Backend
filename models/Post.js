const {Schema,model, Types} = require("mongoose")

const newPost = new Schema({
  content:{type:String,required:true},
  imageUrl:{type:String,required:true},
  ownerUsername:{type:String,required:true},
  ownerId:{type:Types.ObjectId,required:true},
  comments:{type:Array,default:[]}
})

const Post = model("Post",newPost)

module.exports = Post