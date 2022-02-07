import { Schema, model, Types } from "mongoose";
import { Container } from "../@types/Container";
import position from "./schemas/position";
import size from "./schemas/size";

export default model<Container>(
  "Container",
  new Schema<Container>(
    {
      origin: { type: String, required: true },
      position,
      size,
      type: { type: Types.ObjectId, ref: "ContainerType" },
      category: { type: Types.ObjectId, ref: "Category" },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
