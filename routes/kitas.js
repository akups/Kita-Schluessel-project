const express = require("express");
const router = express.Router();
const passport = require("passport");
const Kita = require("../models/Kita");
const HamburgKita = require("../models/HamburgKita");

/* router.get("/kitas", (req, res, next) => {
  console.log("Kitadata", req.body);
}); */

//2. In backend, router get a request from front end, and pass the data to frontend
router.get("/discover", (req, res, next) => {
  //console.log("Discover");

  Kita.find({}).then(result => {
    res.send({ kitas: result });
  });
});

//2. to retrieve hamburg kitas from mongo and make available to frontend
router.get("/discover/hamburg", (req, res, next) => {
  console.log("hamburg", req.body);
  HamburgKita.find({}).then(result => {
    console.log("WHATs result", result);
    res.send({ kitas: result });
  });
});

router.get("/discover/:_id", (req, res, next) => {
  //console.log("Discover");

  Kita.find({}).then(result => {
    //console.log(result);
    res.send({ kitas: result });
  });
});

//post new kita
router.post("/addkita", (req, res) => {
  //2. Get the data from frontend
  const {
    name,
    district,
    address,
    postcode,
    phoneNumber,
    email,
    spotsforunderthree,
    spotsforoverthree
  } = req.body;
  //console.log("BACKEND", req.body);
  //3. Then create a new Kita with information from frontend
  req.user;
  Kita.create({
    name: name,
    district: district,
    address: address,
    postcode: postcode,
    phoneNumber: phoneNumber,
    email: email,
    spotsforunderthree: spotsforunderthree,
    spotsforoverthree: spotsforoverthree
  })
    .then(newKita => {
      console.log("whats name?");
      console.log("NEEWKITA", newKita);
      res.json(newKita);
    })
    .catch(err => {
      res.status(500).json({ message: "Error" });
    });
});

//delete Kita
router.delete("/discover/:id/delete", (req, res) => {
  //console.log("whats req?", req.params.id);
  Kita.deleteOne({ _id: req.params.id })
    .then(result => {
      //console.log("RESULT", result);
      res.json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Error" });
    });
});
router.get("/discover/hamburg/:_id", (req, res) => {
  HamburgKita.find({}).then(result => {
    res.send({ kitas: result });
  });
});

module.exports = router;
