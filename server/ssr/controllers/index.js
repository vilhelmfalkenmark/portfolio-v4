import express from "express";
import serverRenderer from "../middleware";
import store from "store";

const router = express.Router();
// const path = require("path");

const actionIndex = (req, res, next) => {
  serverRenderer(store)(req, res, next);
};

// root (/) should always serve our server rendered page
router.use("^/$", actionIndex);
