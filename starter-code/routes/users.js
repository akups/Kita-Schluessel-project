const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/User");

<<<<<<< HEAD
//2.
router.post("/signup", (req, res) => {
  const { name, password, email, role } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Username can't be empty" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password is too short" });
  }
=======
router.post("/signup", (req, res) => {
  const { name, email, password, role } = req.body;
>>>>>>> akua

  User.findOne({ email: email })
    .then(found => {
      // console.log("FOUND?", found);
      if (found) {
<<<<<<< HEAD
        return res.status(400).json({ message: "This email already exists" });
=======
        return res.status(400).json({ message: "This email already exist" });
>>>>>>> f9f9160c96d05acf545ae18714417ef66412d9d4
      }
      return bcrypt
        .genSalt()
        .then(salt => {
          return bcrypt.hash(password, salt);
        })
        .then(hash => {
<<<<<<< HEAD
          // console.log(name, role, email, password);
          return User.create({
            name: name,
            role: role,
            email: email,
            password: hash
          });
=======
          return User.create({ name: name, password: hash });
>>>>>>> f9f9160c96d05acf545ae18714417ef66412d9d4
        })
        .then(newUser => {
          // console.log("HELLO", newUser);
          // passport login
          req.login(newUser, err => {
            if (err)
              res.status(500).json({ message: "Error while logging in" });
            else res.json(newUser);
          });
        });
    })
    .catch(err => {
      res.status(500).json({ message: "Error while authorizing" });
    });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      // no user found with username or password didn't match
      return res.status(400).json({ message: info.message });
    }
    // passport req.login
    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: "Error while logging in" });
      }
      res.json(user);
    });
  })(req, res, next);
});

router.delete("/logout", (req, res) => {
  // passport logout function
  req.logout();
  res.json({ message: "Successful logout" });
});

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
