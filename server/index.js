import { view, lensPath } from "ramda";
import express from "express";
import bodyParser from "body-parser";
// import mongodb from "mongodb";
import path from "path";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

//////////////////////////////////////////////////
/**
 * ENVIROMENT
 */
//////////////////////////////////////////////////
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
  // MONGODB_URI: view(lensPath(["MONGODB_URI"]), process.env)
};

// Create link to React build directory
app.use(express.static(path.resolve(__dirname, "../build")));

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,application/json, Accept"
  );
  next();
});

// Connect to MongoDB
// mongodb.MongoClient.connect(
//   apiKeys.MONGODB_URI,
//   (err, database) => {
//     if (err) {
//       console.log(err);
//       process.exit(1);
//     }

//     // Register Api routes
//     const apiRouter = require("./api")({ database, apiKeys });
//     app.use("/api", apiRouter);
//     // Redirect every 404 to the client index.html file
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "../build", "index.html"));
//     });

//     app.listen(PORT, () => {
//       console.log("Ansluten till mongodb databas och Bröllops apiet mår bra!");
//     });
//   }
// );

const apiRouter = require("./api")({ apiKeys });

app.use("/api", apiRouter);
// Redirect every 404 to the client index.html file
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Lyssnar på port ${PORT}`);
});
