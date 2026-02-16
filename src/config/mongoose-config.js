import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import mongoose from "mongoose";

const MONGODB_SERVER_URL = process.env.MONGODB_SERVER_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_SERVER_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    // process.exit(1); // stop app if DB fails
  }
};
