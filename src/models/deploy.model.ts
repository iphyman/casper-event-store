import { model, Schema } from "mongoose";
import { IDeploy } from "../@types";

const DeploySchema: Schema = new Schema({
  deployHash: { type: String, required: true, unique: true },
  blockHash: { type: String, required: true },
  account: { type: String, required: true },
  state: { type: String, required: true },
  cost: { type: Number, required: true },
  errorMessage: { type: String }
});

export default model<IDeploy>("Deploy", DeploySchema);
