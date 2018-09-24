import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Root from "layout/Root";

const fs = require("fs");
const path = require("path");

// ...other imports and Express config

const PORT = process.env.PORT || 5000;

const expressApp = express();

expressApp.use(
  "/static",
  express.static(path.resolve(__dirname, "..", "build/static"))
);

expressApp.get("/*", (req, res) => {
  const context = {};
  console.log(req.url);

  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Root />
    </StaticRouter>
  );

  const indexFile = path.resolve(__dirname, "..", "build", "index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

expressApp.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});

// import { view, lensPath } from "ramda";
// import express from "express";
// import bodyParser from "body-parser";
// // import mongodb from "mongodb";
// import path from "path";
// import Loadable from "react-loadable";
// import serverSideRenderer from "./ssr/middleware";
// import apiHandler from "./api";

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const router = express.Router();

// const PORT = process.env.PORT || 5000;

// //////////////////////////////////////////////////
// /**
//  * ENVIROMENT
//  */
// //////////////////////////////////////////////////
// require("dotenv").config(); // <-- Environment variables from webpack-env library

// const apiKeys = {
//   INSTAGRAM_ACCESS_TOKEN: view(
//     lensPath(["INSTAGRAM_ACCESS_TOKEN"]),
//     process.env
//   ),
//   CONTENTFUL_SPACE: view(lensPath(["CONTENTFUL_SPACE"]), process.env),
//   CONTENTFUL_ACCESS_TOKEN: view(
//     lensPath(["CONTENTFUL_ACCESS_TOKEN"]),
//     process.env
//   )
// };

// // Create link to React build directory
// // router.use(express.static(path.resolve(__dirname, "../build")));

// // Handle CORS
// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type,application/json, Accept"
//   );
//   next();
// });

// // app.use("/api", apiHandler({ apiKeys }));

// app.get("/*", serverSideRenderer);

// app.use(
//   express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
// );

// app.use(router);

// // app.listen(PORT, () => {
// //   console.log(`Lyssnar på port ${PORT}`);
// // });

// Loadable.preloadAll().then(() => {
//   app.listen(PORT, error => {
//     // ...
//     console.log(`Lyssnar på port ${PORT}`);
//   });
// });
