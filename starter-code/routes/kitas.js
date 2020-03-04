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

router.get("/discover/hamburg/:_id", (req, res) => {
  HamburgKita.find({}).then(result => {
    res.send({ kitas: result });
  });
});

module.exports = router;
