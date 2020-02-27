const router = require("express").Router();
const usersRoutes = require("./users");

router.get("/", (req, res) => {
  res.send("This is home");
});

router.use("/auth", usersRoutes);
//router.use("/api", postsRoutes);

module.exports = router;
