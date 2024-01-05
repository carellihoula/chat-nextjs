import mongoose, { Schema, Document } from "mongoose";

// Interface pour le document Conversation
interface IConversation extends Document {
  participants: mongoose.Types.ObjectId[]; // Un tableau d'ObjectId pour les participants
  messages: mongoose.Types.ObjectId[]; // Un tableau d'ObjectId pour les messages
}

// Schéma Mongoose pour Conversation
const ConversationSchema: Schema = new Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Référence au modèle User
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message", // Référence au modèle Message
      },
    ],
  },
  {
    timestamps: true, // Active les timestamps pour createdAt et updatedAt
  }
);

// Création du modèle Conversation avec le schéma et l'interface IConversation
const ConversationModel = mongoose.model<IConversation>(
  "Conversation",
  ConversationSchema
);

export default ConversationModel;
