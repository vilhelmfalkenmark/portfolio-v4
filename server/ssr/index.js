import serverRenderer from "./middleware";

const express = require("express");
const router = express.Router();

// module.exports = function() {
//   console.log("hej!");

//   router.get("*", serverRenderer);

//   return router;
// };

export default () => {
  console.log("hej från SSR!");

  router.get("*", serverRenderer);

  return router;
};
