const router = require("express").Router();
const usersRoutes = require("./users");
//const postsRoutes = require("./posts");

router.get("/", (req, res) => {
  res.send("This is home");
});

router.use("/auth", usersRoutes);
//router.use("/api", postsRoutes);

module.exports = router;
