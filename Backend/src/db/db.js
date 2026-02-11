import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("Server Connecting...");
  } catch (err) {
    console.log("Server Connection failed...");
    console.log(err);
  }
}

export default connectDB;
