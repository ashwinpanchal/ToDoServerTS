import dotenv from "dotenv";

dotenv.config();

interface EnvInterface {
  PORT: string;
  MONGO_PORT?: String;
}

const env: EnvInterface = {
  PORT: process.env.PORT || "3000",
  MONGO_PORT: process.env.MONGO_PORT,
};

export default env;
