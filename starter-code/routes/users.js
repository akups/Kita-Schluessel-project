const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/User");

//2.

router.post("/signup", (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);

  User.findOne({ email: email })
    .then(found => {
      console.log("FOUND?", found);
      if (found) {
        HEAD;
        return res.status(400).json({ message: "This email already exists" });

        return res.status(400).json({ message: "This email already exist" });
      }
      return bcrypt
        .genSalt()
        .then(salt => {
          return bcrypt.hash(password, salt);
        })
        .then(hash => {
          // console.log(name, role, email, password);
          return User.create({
            name: name,
            role: role,
            email: email,
            password: hash
          });
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
