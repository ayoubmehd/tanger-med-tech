import { Schema, model } from "mongoose";
import { ContainerType } from "../@types/ContainerType";

export default model<ContainerType>(
  "ContainerType",
  new Schema<ContainerType>(
    {
      label: { type: String, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
