import { Schema, model } from "mongoose";

export default model<ContainerType>(
  "ContainerType",
  new Schema<ContainerType>(
    {
      label: { type: String, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
