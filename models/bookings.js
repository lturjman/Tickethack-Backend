const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  //trip: { type: mongoose.Schema.Types.ObjectId, ref: "trips" },
  trip: {
    departure: String, // Ville de départ
    arrival: String, // Ville d'arrivée
    date: Date, // Date du trajet
    price: Number, // Prix du trajet
  },
  createdAt: { type: Date, default: Date.now }, // Date de la réservation
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
