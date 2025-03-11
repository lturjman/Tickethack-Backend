var express = require("express");
var router = express.Router();
require("../models/connection");
const Trip = require("../models/trips");
const moment = require("moment");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/search", async (req, res) => {
  const { departure, arrival, date } = req.query;
  const currentDate = date;

  const startOfDay = new Date(currentDate);
  startOfDay.setUTCHours(0, 0, 0, 0);

  const endOfDay = new Date(currentDate);
  endOfDay.setUTCHours(23, 59, 59, 999);

  if (!departure || !arrival || !date) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }
  const trips = await Trip.find({
    departure: { $regex: new RegExp(departure, "i") },
    arrival: { $regex: new RegExp(arrival, "i") },
    date: { $gte: startOfDay, $lt: endOfDay },
  });

  res.status(200).json({ trips });
});

module.exports = router;
