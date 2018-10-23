import express from "express";
import bodyParser from "body-parser";
import path from "path";
import Loadable from "react-loadable";
import ssrHandler from "./ssr/controllers";
import apiHandler from "./api";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,application/json, Accept"
  );
  next();
});

// Serve static assets
app.use(
  "/static",
  express.static(path.resolve(__dirname, "..", "build/static"))
);

// Api Middleware
app.use("/api", apiHandler());

// Server-side rendering
app.use(ssrHandler());

/**
 * Next, our server app will need to load all modules before rendering,
 * so we don’t get that loading message rendered on the server.
 * We need the actual component. For this, we’ll use a helper from
 * react-loadable which preloads all async components.
 */
Loadable.preloadAll().then(() => {
  app.listen(PORT, error => {
    console.log(`Lyssnar på port ${PORT}`);
    if (error) {
      console.error(error, " error");
    }
  });
});
