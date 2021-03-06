import { Schema, model } from "mongoose";

export default model<GlobalSetting>(
  "Category",
  new Schema<GlobalSetting>(
    {
      maxPeriod: { type: Date, required: true },
      pricePerHour: { type: Number, required: true },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
