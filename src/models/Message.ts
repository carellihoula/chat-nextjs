import mongoose, { Schema, Document } from "mongoose";

interface IMessage extends Document {
  conversation: mongoose.Schema.Types.ObjectId;
  sender: mongoose.Schema.Types.ObjectId;
  content: string;
}

const MessageSchema: Schema = new Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
