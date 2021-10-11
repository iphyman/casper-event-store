import { model, Schema } from "mongoose";
import { IBlock } from "../@types";

const BlockSchema: Schema = new Schema({
  blockHash: { type: String, required: true, unique: true },
  parentHash: { type: String, required: true },
  timestamp: { type: Date, required: true },
  eraId: { type: Number, required: true },
  height: { type: Number, required: true, unique: true },
  proposer: { type: String, required: true },
  state: { type: String, required: true },
  deployCount: { type: Number, required: true, default: 0 },
  deploys: [
    {
      type: Schema.Types.ObjectId,
      ref: "Deploy"
    }
  ]
});

export default model<IBlock>("Block", BlockSchema);
