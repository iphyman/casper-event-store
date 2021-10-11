import { Document } from "mongoose";

export interface IDeploy extends Document {
  errorMessage?: string;
  deployHash: string;
  blockHash: string;
  account: string;
  state: string;
  cost: number;
}
