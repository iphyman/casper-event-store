import { merge } from "lodash";
import { Resolvers } from "../@types";
import { BlockResolver } from "./resolvers";

const resolversMap: Resolvers = merge(BlockResolver);
export default resolversMap;
