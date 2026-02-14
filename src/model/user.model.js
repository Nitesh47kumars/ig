import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "userName Must Required!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email Must Required!"],
    },
    password: {
      type: String,
      required: [true, "Password Must Required!"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
