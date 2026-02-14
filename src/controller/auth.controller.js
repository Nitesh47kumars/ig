import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

async function registerUser(req, res) {
  try {
    const { userName, email, password } = req.body;

    const isUserAlreadyExist = User.findOne({email});

    if(isUserAlreadyExist){
      return res.status(409).json({
        message: "User Already Exist!"
      })
    }

    const user = await User.create({
      userName,
      email,
      password,
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.cookie("token",token)

    res.status(201).json({
      message: "User Registered Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log("Message:",error);
    res.status(500).json({ message: "Registration Failed" });
  }
}
export { registerUser };
