import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connect } from "mongoose";

import env from "./config/serverConfig";
import { router } from "./routes";

const startAndSetupServer = async () => {
  const app: Express = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/api", router);

  await connect(`mongodb://${env.MONGO_PORT}/Todo`, { dbName: "Todo" });

  app.listen(env.PORT, () => {
    console.log("Server started on PORT", env.PORT);
  });
};

startAndSetupServer();
