import express from "express";
import middleware from "../middleware";
import configureStore from "store";
import axios from "axios";
import { apiBase } from "utils/constants/environmentVariables";

import { PROJECTS_FULFILLED, PROJECTS_REJECTED } from "store/actionTypes";

const router = express.Router();

const actionIndex = (req, res, next) => {
  console.log(req.url, " <--req.url");

  const store = configureStore();
  axios
    .get(`${apiBase}/projects`)
    .then(({ data }) => {
      store.dispatch({ type: PROJECTS_FULFILLED, payload: data });
      middleware(store)(req, res, next);
    })
    .catch(err => {
      store.dispatch({ type: PROJECTS_REJECTED, payload: err });
    });
};

router.get("*", actionIndex);

export default router;
