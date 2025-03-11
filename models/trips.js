const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  departure: String, // Ville de départ
  arrival: String, // Ville d'arrivée
  date: Date, // Date du trajet
  price: Number, // Prix du trajet
});

// Création du modèle "Trip" basé sur ce schéma
const Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;
