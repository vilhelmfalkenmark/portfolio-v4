import { view, lensPath } from "ramda";
import express from "express";
import bodyParser from "body-parser";
// import mongodb from "mongodb";
import path from "path";

import serverSideRenderer from "./ssr";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

//////////////////////////////////////////////////
/**
 * ENVIROMENT
 */
//////////////////////////////////////////////////
require("dotenv").config(); // <-- Environment variables from webpack-env library

const apiKeys = {
  INSTAGRAM_ACCESS_TOKEN: view(
    lensPath(["INSTAGRAM_ACCESS_TOKEN"]),
    process.env
  ),
  CONTENTFUL_SPACE: view(lensPath(["CONTENTFUL_SPACE"]), process.env),
  CONTENTFUL_ACCESS_TOKEN: view(
    lensPath(["CONTENTFUL_ACCESS_TOKEN"]),
    process.env
  )
};

// Create link to React build directory
app.use(express.static(path.resolve(__dirname, "../build")));

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,application/json, Accept"
  );
  next();
});

const apiRouter = require("./api")({ apiKeys });
app.use("/api", apiRouter);

// Redirect every get request that is not /api to the SSR handler
// const ssrRouter = require("./ssr");

app.get(/^(?!.*api).*$/, serverSideRenderer());

app.listen(PORT, () => {
  console.log(`Lyssnar på port ${PORT}`);
});
