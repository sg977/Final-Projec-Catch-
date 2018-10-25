const router = require("express").Router();
const chatController = require("../../controllers/chatController");

router.route("/")
  .get(chatController.findAllChats)
  .post((req, res) => {
    console.log("in chats post")
    console.log(req.body)
    chatController.createRoom(req, res)
    // chatController.updateStatus(req._body, res)
  });

router
  .route("/:id")
  .get(chatController.findAllChats)
  .put((req, res) => {
    console.log(req.body)
    chatController.updateStatus(req, res)
  })
  .post((req, res) => {
    console.log(req.body)
    chatController.addMessage(req, res)
  });
  // .post(chatController.addMessage);
  

module.exports = router;
