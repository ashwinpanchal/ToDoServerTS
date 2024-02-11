import dotenv from "dotenv";

dotenv.config();

interface EnvInterface {
  PORT: string;
}

const env: EnvInterface = {
  PORT: process.env.PORT || "3000",
};

export default env;
