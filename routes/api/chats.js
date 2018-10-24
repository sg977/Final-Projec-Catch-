const router = require("express").Router();
const chatController = require("../../controllers/chatController");

router.route("/")
  .get(chatController.findAllChats)
  .post((req, res) => {
    console.log("in chats post")
    console.log(req.body)
    chatController.create(req, res)
  });


router
  .route("/:id")
  .get(chatController.findAllChats)
  .post(chatController.addMessage);

module.exports = router;
