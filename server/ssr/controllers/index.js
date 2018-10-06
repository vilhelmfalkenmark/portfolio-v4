import express from "express";
import middleware from "../middleware";
import configureStore from "store";
import clientRoutes from "router/routes";
import promiseResolve from "utils/helpers/promises";

const router = express.Router();

const fetchEntryPointContent = ({ store, req, res, next }) => {
  let i;
  for (i = 0; i < clientRoutes.length; i += 1) {
    if (req.url === clientRoutes[i].path) {
      return promiseResolve(clientRoutes[i].ssrContentRequest(store))
        .then(storeWithContent => {
          middleware(storeWithContent)(req, res, next);
        })
        .catch(err => {
          middleware(store)(req, res, next);
        });
    }
  }
  return middleware(store)(req, res, next);
};

const actionIndex = (req, res, next) => {
  fetchEntryPointContent({ store: configureStore(), req, res, next });
};

router.get("*", actionIndex);

export default router;
