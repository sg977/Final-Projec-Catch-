const router = require("express").Router();
const userRoutes = require("./users");
const chatRoutes = require("./chats")
const matchRoutes = require("./matches");

router.use("/users", userRoutes);
router.use("/matches", matchRoutes);
router.use("/chats", chatRoutes);


module.exports = router;
