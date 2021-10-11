import dotenv from "dotenv";

dotenv.config();

const NODE_PORT = process.env.NODE_PORT;
const NODE_HOST = process.env.NODE_HOST;
const NODE_PROTOCOL = process.env.NODE_PROTOCOL;
const NODE_EVENT_PATH = process.env.NODE_EVENT_PATH;

export const NODE_URL = `${NODE_PROTOCOL}://${NODE_HOST}:${NODE_PORT}/${NODE_EVENT_PATH}`;
