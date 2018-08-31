const router = require("express").Router();
const axios = require("axios");

module.exports = instagramToken => {
  router.route("/").get((req, res) => {
    axios
      .get(
        `https://api.instagram.com/v1/users/self/media/recent/?access_token=${instagramToken}&count=10&square=true`
      )
      .then(({ data }) => {
        res.json({ data });
      })
      .catch(err => res.json(err));
  });
  return router;
};
