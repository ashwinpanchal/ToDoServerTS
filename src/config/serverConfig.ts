import dotenv from "dotenv";

dotenv.config();

interface EnvInterface {
  PORT: string;
  MONGO_PORT?: string;
  JWT_SECRET: string;
}

const env: EnvInterface = {
  PORT: process.env.PORT || "3000",
  MONGO_PORT: process.env.MONGO_PORT,
  JWT_SECRET: process.env.JWT_SECRET || "SECRET",
};

export default env;
