import dotenv from "dotenv";

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME;
const SERVER_PORT = process.env.SERVER_PORT;

export const SERVER_CONFIG = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT
};
