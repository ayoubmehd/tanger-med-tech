import { Schema, model } from "mongoose";
import { Category } from "../@types/Category";

export default model<Category>(
  "Category",
  new Schema<Category>(
    {
      label: { type: String, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
