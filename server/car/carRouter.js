var carRouter = require("express").Router();
var carController = require("./carController");
const authMiddelware = require("../middleware/middleware");

carRouter.get("/", carController.getAll);
carRouter.get("/:id", carController.getOne);

carRouter.post("/", authMiddelware, carController.createOne);
carRouter.delete("/:id", authMiddelware, carController.deleteOne);
carRouter.put("/:id", authMiddelware, carController.updateOne);

module.exports = carRouter;
