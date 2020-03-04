const router = require("express").Router();
const usersRoutes = require("./users");
const kitaRoute = require("./kitas");

/* router.get("/", (req, res) => {
  res.send("This is home");
}); */

//To connect frontend and backend, we need to make a route first
router.use("/api/auth", usersRoutes);
router.use("/api", kitaRoute);

//router.use("/api", postsRoutes);

module.exports = router;
