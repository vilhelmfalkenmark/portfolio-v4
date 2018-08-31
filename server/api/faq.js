const router = require("express").Router();

const promiseResolve = data =>
  new Promise((resolve, reject) => {
    resolve(data);
    reject(err => {
      throw new Error(err, " error");
    });
  });

module.exports = contentfulClient => {
  router
    .route("/")
    //////////////////////////////////////////
    // GET REQUEST FOR ALL FAQS
    //////////////////////////////////////////
    .get((request, response) => {
      const faqs = contentfulClient
        .getEntries({ content_type: "faq" })
        .then(entry => entry.items.map(item => item.fields))
        .catch(err => {
          return "Kunde inte hämta faq data från contentful";
        });
      promiseResolve(faqs)
        .then(data => {
          response.json({
            data
          });
        })
        .catch(e => {
          response.json({
            data: "Error när vanliga frågor skulle hämtas"
          });
        });
    });

  return router;
};
