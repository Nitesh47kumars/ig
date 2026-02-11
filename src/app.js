import express from "express"
import multer from "multer";
import { uploadFile } from "./services/storage.service.js";
import {Post} from './models/post.model.js'

const app = express();
app.use(express.json({limit:"16kb"}));

const upload = multer({storage: multer.memoryStorage()})

app.post('/create-post', upload.single("post") ,async (req,res)=>{

    const result = await uploadFile(req.file?.buffer);

    const post = await Post.create({
        post: result.url,
        caption: req.body.caption
    })

    res.json({
        message: "Post Created",
        post
    })
})

app.get('/posts', async (req,res)=>{
    const posts = await Post.find();

    return res.status(200).json({
        message: "Post Fetched Successfully!",
        posts
    })
})

export default app;