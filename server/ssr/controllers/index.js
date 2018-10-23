import express from "express";
import middleware from "../middleware";
import configureStore from "store";
import clientRoutes from "router/routes";
import promiseResolve from "utils/helpers/promises";

const router = express.Router();

const fetchEntryPointContent = ({ store, req, res, next }) => {
  console.log(req.url, " <-- req.url");

  let i;
  for (i = 0; i < clientRoutes.length; i += 1) {
    if (req.url.match(clientRoutes[i].regexRouteMatch)) {
      console.log("I fetchEntryPointContent");

      return promiseResolve(clientRoutes[i].ssrContentRequest(store))
        .then(storeWithContent => {
          middleware(storeWithContent)(req, res, next);
        })
        .catch(err => {
          middleware(store)(req, res, next, err);
        });
    }
  }
  return middleware(store)(req, res, next);
};

// TODO Continue here with controllers for different routes
export default () => {
  router.get("/", (req, res, next) => {
    res.json({ message: "Välkommen till mitt Portfolio API" });
  });
  router.use("/erfarenheter/", null);
  router.use("/projekt/", null);
  router.use("/landing-page/", null);
};

// const actionIndex = (req, res, next) => {
//   fetchEntryPointContent({ store: configureStore(), req, res, next });
// };

// router.get("*", actionIndex);

// export default router;
