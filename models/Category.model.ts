import { Schema, model } from "mongoose";

export default model<Category>(
  "Category",
  new Schema<Category>(
    {
      label: { type: String, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
