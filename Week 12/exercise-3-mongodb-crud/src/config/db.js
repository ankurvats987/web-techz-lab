const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not set. Add it in .env file.");
  }

  await mongoose.connect(uri);
  console.log("MongoDB connected successfully");

  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error.message);
  });
};

module.exports = connectDB;
