import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from "./config/serverConfig";

const startAndSetupServer = () => {
  const app: Express = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.listen(env.PORT, () => {
    console.log("Server started on PORT", env.PORT);
  });
};

startAndSetupServer();
