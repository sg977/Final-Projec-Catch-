const router = require("express").Router();
const userRoutes = require("./users");
const matchRoutes = require("./matches");

// Book routes
router.use("/users", userRoutes);
router.use("/matches", matchRoutes);

module.exports = router;
