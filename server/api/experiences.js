const router = require("express").Router();

module.exports = () => {
  router.route("/").get((req, res) => {
    console.log("Anrop körs till erfarenheter!");

    res.json({
      data: [
        { type: "Första erfarenheten" },
        { type: "Andra erfarenheten" },
        { type: "Tredje erfarenheten" }
      ]
    });
  });

  return router;
};
