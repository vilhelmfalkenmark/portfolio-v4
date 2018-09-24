import { view, lensPath } from "ramda";
import express from "express";
import bodyParser from "body-parser";
// import mongodb from "mongodb";
import path from "path";

import serverSideRenderer from "./ssr/middleware";
import apiHandler from "./api";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

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
// router.use(express.static(path.resolve(__dirname, "../build")));

// Handle CORS
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,application/json, Accept"
  );
  next();
});

router.use("/api", apiHandler({ apiKeys }));

router.use("^/$", serverSideRenderer);

router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

app.use(router);

app.listen(PORT, () => {
  console.log(`Lyssnar på port ${PORT}`);
});
