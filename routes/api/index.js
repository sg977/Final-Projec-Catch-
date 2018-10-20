const router = require("express").Router();
const userRoutes = require("./users");

// Book routes
router.use("/books", userRoutes);

module.exports = router;
