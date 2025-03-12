var express = require("express");
var router = express.Router();
require("../models/connection");
const Cart = require("../models/carts");
const Trip = require("../models/trips");
const Booking = require("../models/bookings");

router.post("/purchase", async (req, res) => {
  const carts = await Cart.find().populate("trip");
  console.log(carts);

  if (carts.length === 0) {
    return res.status(400).json({ message: "Le panier est vide" });
  }

  for (let i = 0; i < carts.length; i++) {
    let bookings = new Booking();
    bookings.trip = carts[i].trip;
    // bookings.departure = carts[i].trip.departure;
    // bookings.arrival = carts[i].trip.arrival;
    // bookings.date = carts[i].trip.date;
    await bookings.save();
  }

  await Cart.deleteMany({});

  res.status(200).json({ message: "Achat réussi, trajets réservés" });
});

// Récupérer les réservations
router.get("/", (req, res) => {
  Booking.find()
    .populate("trip")
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    });
});

module.exports = router;
