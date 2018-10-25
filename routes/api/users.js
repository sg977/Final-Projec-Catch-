const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
  .get(usersController.findGenderInterest)
  .post((req, res) => {
    console.log("in users post")
    console.log(req.body)
    usersController.create(req, res)
  });

router
  .route("/:id")
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
