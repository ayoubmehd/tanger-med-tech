import { Schema, model } from "mongoose";

export default model<Cour>(
  "Cour",
  new Schema<Cour>(
    {
      size: { type: Number, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
