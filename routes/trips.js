var express = require("express");
var router = express.Router();
require("../models/connection");
const Trip = require("../models/trips");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
// RECUPERER UN TRAJET SELON LES PARAMETRES ENTRÉS DANS LA REQUÊTE
/*router.get("/search", (req, res) => {
  Trip.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: "Erreur serveur", details: err }));
});*/



router.get("/search", (req, res) => {
  const { departure, arrival, date } = req.query;
  if (!departure || !arrival || !date) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }
  Trip.find({
    departure: { $regex: new RegExp(departure, "i") },
    arrival: { $regex: new RegExp(arrival, "i") },
    date,
  })
  .then(trips => res.status(200).json(trips))
  .catch(error => res.status(500).json({ error: "Erreur serveur" }));
});

module.exports = router;
