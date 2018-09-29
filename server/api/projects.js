const router = require("express").Router();

const promiseResolve = data =>
  new Promise((resolve, reject) => {
    resolve(data);
    reject(err => {
      throw new Error(err, " error");
    });
  });

module.exports = contentful => {
  router
    .route("/")
    //////////////////////////////////////////
    // GET REQUEST FOR ALL PROJECTS
    //////////////////////////////////////////
    .get((request, response) => {
      const projects = contentful
        .getEntries({ content_type: "projects" })
        .then(entry => entry.items.map(item => item.fields))
        .catch(err => {
          console.error(err);
          return "Kunde inte hämta projects från contentful";
        });
      promiseResolve(projects)
        .then(data => {
          console.log(data);

          response.json({
            data
          });
        })
        .catch(e => {
          console.error(e);

          response.json({
            data: "Error när info skulle hämtas"
          });
        });
    });

  return router;
};
