import express from "express";
import multer from "multer";
import { Post } from "./models/post.model.js";
import {uploadFile} from "./services/storage.service.js";

const app = express();
app.use(express.json({ limit: "16kb" }));

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("post"), async (req, res) => {
  const result = await uploadFile(req.file?.buffer);

  const post = await Post.create({
    post: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "Post Created Successfully",
    post,
  });
});

app.get('/posts',async (req,res)=>{
    const posts = await Post.find();

    res.status(200).json({
        message: "Posts Fetched Successfully",
        posts
    })
})

export default app;
