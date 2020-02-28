const router = require("express").Router();
const usersRoutes = require("./users");

/* router.get("/", (req, res) => {
  res.send("This is home");
}); */

<<<<<<< HEAD
router.use("/api/auth", usersRoutes);
=======
router.use("/auth", usersRoutes);
>>>>>>> Laurel
//router.use("/api", postsRoutes);

module.exports = router;
