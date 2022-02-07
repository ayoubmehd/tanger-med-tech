import { Schema, model } from "mongoose";
import { TransportType } from "../@types/TransportType";

export default model<TransportType>(
  "TransportType",
  new Schema<TransportType>(
    {
      type: { type: String, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
