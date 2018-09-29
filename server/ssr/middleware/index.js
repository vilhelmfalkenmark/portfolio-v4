import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import store from "store";

import Root from "layout/Root";

// Client side build manifest
import manifest from "build/asset-manifest.json";

const path = require("path");
const fs = require("fs");

const extractAssets = (assets, chunks) =>
  Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace(".js", "")) > -1)
    .map(k => assets[k]);

export default (req, res) => {
  // export default store => (req, res) => {
  // res.send("hejsan!");

  // console.log("kallas på!", store);

  const context = {};
  const modules = [];

  const app = ReactDOMServer.renderToString(
    <Loadable.Capture report={m => modules.push(m)}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Root />
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );

  console.log(modules);

  const extraChunks = extractAssets(manifest, modules).map(
    c => `<script type="text/javascript" src="/${c}"></script>`
  );

  const indexFile = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "build",
    "index.html"
  );

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace("</body>", `${extraChunks.join("")}</body>`)
    );
  });
};
