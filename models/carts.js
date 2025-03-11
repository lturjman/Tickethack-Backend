const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: "trips" }, // Liste des trajets
  // departure: String, // Ville de départ
  // arrival: String, // Ville d'arrivée
  // date: Date, // Date du trajet
  // price: Number, // Prix du trajet
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
