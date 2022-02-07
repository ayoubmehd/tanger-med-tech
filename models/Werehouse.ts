import { Schema, model } from "mongoose";
import { Werehouse } from "../@types/Werehouse";
import size from "./schemas/size";

export default model<Werehouse>(
  "Werehouse",
  new Schema<Werehouse>(
    {
      size,
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
