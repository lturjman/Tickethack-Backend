var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/message", function (req, res) {
  res.json({ message: "Hello depuis le backend!" });
});

const moment = require("moment");

router.get("/api/date", (req, res) => {
  const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");
  res.json({ date: currentDate });
});

module.exports = router;
