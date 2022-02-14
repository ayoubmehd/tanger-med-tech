import { Schema, model } from "mongoose";

export default model<TransportType>(
  "TransportType",
  new Schema<TransportType>(
    {
      type: { type: String, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
