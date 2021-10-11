import { Document } from "mongoose";

export interface IBlock extends Document {
  blockHash: string;
  parentHash: string;
  bodyHash: string;
  accumulatedSeed: string;
  timestamp: Date;
  eraId: number;
  height: number;
  proposer: string;
  stateRootHash: string;
}
