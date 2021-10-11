import dotenv from "dotenv";

dotenv.config();

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 50,
  socketTimeoutMS: 45000,
  retryWrites: true
};

const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_PROTOCOL = process.env.DATABASE_PROTOCOL;
const DATABASE_HOST = process.env.DATABASE_HOST;

export const MONGO_DB_CONFIG = {
  host: DATABASE_HOST,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  options: MONGOOSE_OPTIONS,
  url: `${DATABASE_PROTOCOL}://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}`
};
