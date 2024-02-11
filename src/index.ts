import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connect } from "mongoose";

import env from "./config/serverConfig";

const startAndSetupServer = async () => {
  const app: Express = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  await connect(`mongodb://${env.MONGO_PORT}/Todo`, { dbName: "Todo" });

  app.listen(env.PORT, () => {
    console.log("Server started on PORT", env.PORT);
  });
};

startAndSetupServer();
