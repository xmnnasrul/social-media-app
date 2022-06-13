import mongoose from "mongoose";
const postScema = mongoose.Schema({
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,

}, { timestamps: true, });

var PostModel = mongoose.model("post", postScema)
export default PostModel