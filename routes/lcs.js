var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ lcs: "kud, sej, Let's go" });
});

module.exports = router;
