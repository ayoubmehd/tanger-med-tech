import { Schema, model, Types } from "mongoose";
import { Section } from "../@types/Section";

export default model<Section>(
  "Section",
  new Schema<Section>(
    {
      categories: [{ type: Types.ObjectId, ref: "Category" }],
      containers: [{ type: Types.ObjectId, ref: "Container" }],
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
