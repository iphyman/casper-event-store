import { MONGO_DB_CONFIG } from "./dbConfig";
import { SERVER_CONFIG } from "./serverConfig";
import { NODE_URL } from "./nodeConfig";

const configs = {
  mongodb: MONGO_DB_CONFIG,
  nodeurl: NODE_URL,
  server: SERVER_CONFIG
};

export default configs;
