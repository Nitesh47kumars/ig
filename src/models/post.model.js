import mongoose, { Schema } from "mongoose";

export const postSchema = new Schema(
  {
    post: {
      type: String,
      required: [true, "Post must be required!"],
    },
    caption: {
      type: String,
      required: [true, "Caption must be required!"],
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
