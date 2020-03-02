const express = require("express");
const router = express.Router();
const passport = require("passport");
const Kita = require("../models/Kita");

router.get("/kitas", (req, res, next) => {
  console.log("Kitadata", req.body);
});
