var express = require("express");
var router = express.Router();
require("../models/connection");
const Cart = require("../models/carts");
const Trip = require("../models/trips");

// RESERVATION TRAJET
// Créer une réservation

// router.post("/bookings", (req, res) => {
//   res.json();
// });

router.post("/add", async (req, res) => {
  res.status(200).json({});
});

// Récupérer les réservations
router.get("/bookings", (req, res) => {
  res.json();
});

module.exports = router;
