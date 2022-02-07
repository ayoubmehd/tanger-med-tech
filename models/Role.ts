import { Schema, model } from "mongoose";
import { Role } from "../@types/Role";

export default model<Role>(
  "Role",
  new Schema<Role>(
    {
      type: { type: String, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
