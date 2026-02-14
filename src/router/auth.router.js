import { Router } from "express";
import { registerUser } from "../controller/auth.controller.js";

const router = Router();

router.post('/register', registerUser);

router.get('/test', async (req,res)=>{
    console.log("Cookie:",req.cookies);

    res.json({
        message:"Test Route",
        cookies:req.cookies
    })
})

export default router;