const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookings: { type: mongoose.Schema.Types.ObjectId, ref: "bookings" }, // Liste des bookings
  // departure: String, // Ville de départ
  // arrival: String, // Ville d'arrivée
  // date: Date, // Date du trajet
  // price: Number, // Prix du trajet
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
