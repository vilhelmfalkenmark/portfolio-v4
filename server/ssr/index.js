import serverRenderer from "./middleware";

import express from "express";

const router = express.Router();
export default () => {
	console.log("serverRenderer Kallas på!");
	
  router.get("*", serverRenderer);
  return router;
};
