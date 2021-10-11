import "graphql-import-node";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import * as emptyTypeDefs from "./schemas/empty.graphql";
import * as blockTypeDefs from "./schemas/block.graphql";
import resolversMap from "./resolversMap";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, blockTypeDefs],
  resolvers: resolversMap
});

export default schema;
