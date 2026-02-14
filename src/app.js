import express from 'express'
import authRouter from './router/auth.router.js'
import postRouter from './router/post.router.js'
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json({limit:"16kb"}));
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use('/api/post',postRouter)

export default app;