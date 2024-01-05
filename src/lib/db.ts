import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
      console.log("connection established");
    })
    .catch((err) => {
      console.log("connection error:" + err.message);
    });
};
