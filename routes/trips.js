var express = require("express");
var router = express.Router();
require("../models/connection");
const Trip = require("../models/trips");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
// RECUPERER UN TRAJET SELON LES PARAMETRES ENTRÉS DANS LA REQUÊTE
router.get("/search", async (req, res) => {
  const { departure, arrival, date } = req.query;
  if (!departure || !arrival || !date) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }
  // Recherche des trajets en base de données (exemple avec MongoDB)
  const trips = await Trip.find({
    departure: { $regex: new RegExp(departure, "i") }, // Recherche insensible à la casse
    arrival: { $regex: new RegExp(arrival, "i") },
    date,
  });

  res.status(200).json({ trips });
});

module.exports = router;
