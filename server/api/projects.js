import express from "express";
import promiseResolve from "utils/helpers/promises";

const router = express.Router();

export default contentful => {
  router
    .route("/")
    //////////////////////////////////////////
    // GET REQUEST FOR ALL PROJECTS
    //////////////////////////////////////////
    .get((req, res) => {
      const projects = contentful
        .getEntries({
          content_type: "projects"
        })
        .then(entry => entry.items.map(item => item.fields))
        .catch(err => {
          console.error(err);
          return "Kunde inte hämta projects från contentful";
        });
      promiseResolve(projects)
        .then(data => {
          res.json({
            data
          });
        })
        .catch(e => {
          console.error(e);
          res.sendStatus(404);
          res.json({
            data: "Error när info skulle hämtas"
          });
        });
    });
  //////////////////////////////////////////
  // GET req FOR SINGLE PROJECT
  //////////////////////////////////////////
  router.route("/:slug").get((req, res) => {
    const urlWithoutSlash = req.url.replace(/\//g, ""); // /kombispel/ --> kombispel
    const projects = contentful
      .getEntries({
        content_type: "projects"
      })
      .then(entry => entry.items.map(item => item.fields))
      .then(projects =>
        projects.filter(project => project.slug === urlWithoutSlash).pop()
      )
      .catch(err => {
        console.error(err);
        return `Kunde inte hämta ${req.url} från contentful`;
      });
    promiseResolve(projects)
      .then(data => {
        if (!data) {
          res.sendStatus(404);
          res.json({
            data: "Error när info skulle hämtas"
          });
        }

        res.json({
          data
        });
      })
      .catch(e => {
        console.error(e);
        res.sendStatus(404);
        res.json({
          data: "Error när info skulle hämtas"
        });
      });
  });

  return router;
};
