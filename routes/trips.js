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
  try {
    // Recherche des trajets en base de données (exemple avec MongoDB)
    const trips = await Trip.find({
      departure: { $regex: new RegExp(departure, "i") }, // Recherche insensible à la casse
      arrival: { $regex: new RegExp(arrival, "i") },
      date,
    });

    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la recherche des trajets" });
  }
});

// RESERVATION TRAJET
// Créer une réservation

router.post("/bookings", (req, res) => {
  res.json();
});

module.exports = router;

// Récupérer les réservations
router.get("/bookings", (req, res) => {
  res.json();
});

module.exports = router;
