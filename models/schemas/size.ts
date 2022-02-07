import { Schema } from "mongoose";
import { Position } from "../../@types/Position";

export default new Schema<Position>(
  {
    X: { type: Number, required: true },
    Y: { type: Number, required: true },
    Z: { type: Number, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);
