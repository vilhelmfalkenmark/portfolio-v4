import express from "express";
const contentful = require("contentful");

const router = express.Router();

export default ({ apiKeys }) => {
	
  const contentfulClient = contentful.createClient({
    space: apiKeys.CONTENTFUL_SPACE,
    accessToken: apiKeys.CONTENTFUL_ACCESS_TOKEN
  });

  router.get("/", (req, res) => {
    res.json({ message: "Välkommen till mitt Portfolio API" });
  });
  router.use("/faq", require("./faq")(contentfulClient));
  router.use("/projects", require("./projects")(contentfulClient));
  router.use(
    "/instagram",
    require("./instagram")(apiKeys.INSTAGRAM_ACCESS_TOKEN)
  );

  return router;
};
