import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

// import our main App component
import Root from "layout/Root";

const path = require("path");
const fs = require("fs");
require("ignore-styles");

export default (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "build",
    "index.html"
  );

  console.log(filePath);

  const context = {};
  console.log(req.url, " <-- req.url");

  // render the app as a string
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Root />
    </StaticRouter>
  );

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
