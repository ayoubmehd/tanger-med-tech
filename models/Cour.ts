import { Schema, model } from "mongoose";
import { Cour } from "../@types/Cour";

export default model<Cour>(
  "Cour",
  new Schema<Cour>(
    {
      size: { type: Number, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
