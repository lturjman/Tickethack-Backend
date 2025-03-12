var express = require("express");
var router = express.Router();
require("../models/connection");
const Cart = require("../models/carts");
const Trip = require("../models/trips");
const Booking = require("../models/bookings");

// RESERVATION TRAJET
// Créer une réservation

// router.post("/bookings", (req, res) => {
//   res.json();
// });

router.post("/purchase", async (req, res) => {
  res.status(200).json({ message: "Trajet booké" });
});

// Récupérer les réservations
router.get("/bookings", (req, res) => {
  res.json();
});

module.exports = router;
