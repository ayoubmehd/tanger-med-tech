import { Schema, model, Types } from "mongoose";

export default model<Section>(
  "Section",
  new Schema<Section>(
    {
      category: { type: Types.ObjectId, ref: "Category" },
      containers: [{ type: Types.ObjectId, ref: "Container" }],
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
