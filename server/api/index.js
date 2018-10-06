import express from "express";
import { view, lensPath } from "ramda";

const contentful = require("contentful");

const router = express.Router();
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

const contentfulClient = contentful.createClient({
  space: apiKeys.CONTENTFUL_SPACE,
  accessToken: apiKeys.CONTENTFUL_ACCESS_TOKEN
});

export default () => {
  router.get("/", (req, res) => {
    res.json({ message: "Välkommen till mitt Portfolio API" });
  });
  router.use("/experiences/", require("./experiences")());
  router.use("/projects/", require("./projects")(contentfulClient));
  router.use("/landing-page/", require("./landingpage")());
  // router.use(
  //   "/instagram",
  //   require("./instagram")(apiKeys.INSTAGRAM_ACCESS_TOKEN)
  // );

  return router;
};
