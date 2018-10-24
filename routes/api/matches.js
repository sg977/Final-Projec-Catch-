const router = require("express").Router();
const matchesController = require("../../controllers/matchesController");

router.route("/")
  .get(matchesController.findAll)
  .post((req, res) => {
    console.log("in matches post")
    console.log(req.body)
    matchesController.create(req, res)
  });

router
  .route("/:id")
  .put(matchesController.update)
  .delete(matchesController.remove);

module.exports = router;
