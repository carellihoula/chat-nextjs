import mongoose, { Schema } from "mongoose";

const userModel = new Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      trim: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userModel);

export default User;
