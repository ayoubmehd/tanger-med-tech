import { Schema, model, Types } from "mongoose";

export default model<Transporter>(
  "Transporter",
  new Schema<Transporter>(
    {
      client: { type: String, required: true },
      matricule: { type: String, required: true },
      type: { type: Types.ObjectId, ref: "TransportType" },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
  )
);
