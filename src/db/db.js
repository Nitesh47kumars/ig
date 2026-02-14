import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log("Server Connecting...")
    } catch (err) {
        console.log("Server Connection Failed!");
        console.log("Message:",err);
    }
}

export default connectDB;