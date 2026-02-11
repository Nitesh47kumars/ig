import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    post: {
      type: String,
      required: [true, "Post must be Required!"],
    },
    caption: {
      type: String,
      required: [true, "Caption must be Required!"],
    },
  },
  { timestamps: true },
);

export const Post = mongoose.model("Post", postSchema);
