import mongoose from "mongoose";

export const initDB = async () => {
  try {
    const DB_URL = process.env.MONGO_URL;
    if (!DB_URL) {
      console.log("database url not specified");
      process.exit(1);
    }
    const connection = await mongoose.connect(DB_URL);
    console.log("db connection established");
  } catch (error) {
    console.log("db connection error: " + error);
    process.exit(1);
  }
};
