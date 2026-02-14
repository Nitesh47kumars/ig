import { Router } from "express";
import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

const router = Router();

router.post("/create", async (req, res) => {
  const token = req.cookies?.token;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded.id
    });

    if(user){
      console.log(user)
    }
  } catch (err) {
    res.status(401).json({
      message: "UnAuthorized Access",
    });
  }

  res.send("Post Create");

});

export default router;
