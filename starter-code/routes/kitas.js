const express = require("express");
const router = express.Router();
const passport = require("passport");
const Kita = require("../models/Kita");

/* router.get("/kitas", (req, res, next) => {
  console.log("Kitadata", req.body);
}); */

//2. In backend, router get a request from front end, and pass the data to frontend
router.get("/discover", (req, res, next) => {
  //console.log("Discover");

  Kita.find({}).then(result => {
    //console.log(result);
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

module.exports = router;
