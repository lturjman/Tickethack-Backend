var express = require("express");
var router = express.Router();
require("../models/connection");
const Cart = require("../models/carts");
const Trip = require("../models/trips");

//GESTION DU PANIER
// Récupérer contenu du panier
router.get("/", (req, res) => {
  Cart.find({})
    .populate("trip")
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    });
});
// Ajouter un Trips au panier

router.post("/add/:tripId", async (req, res) => {
  const tripId = req.params.tripId;

  // ajouter le trajet au panier
  const newCart = new Cart({
    trip: tripId, // Liste des trajets
    // departure: req.body.departure, // Ville de départ
    // arrival: req.body.arrivel, // Ville d'arrivée
    // date: req.body.date, // Date du trajet
    // price: req.body.price, // Prix du trajet
  });

  await newCart.save().then(() => {
    Cart.find().then((data) => {
      console.log(data);
    });
  });
  res.status(200).json({ message: "Trajet ajouté au panier" });
});

// //Supprimer un Trip du panier

router.delete("/remove/:tripId", async (req, res) => {
  const tripId = req.params.tripId;

  Cart.deleteOne({ _id: tripId }).then(() => {
    Cart.find().then((data) => {
      console.log(data);
    });
  });
  res.status(200).json({ message: "Trajet supprimé du panier" });
});

module.exports = router;
