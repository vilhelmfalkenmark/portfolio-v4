import express from "express";
import serverRenderer from "./middleware";
import store from "store";

const router = express.Router();

export default (req, res, next) => {
  console.log("hejsan från ssr index", store);

  router.use("/*", serverRenderer(store));
  next();

  return router;
};
