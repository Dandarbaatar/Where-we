const express = require("express");
const {
detailPostController,
detailGetControllerById,
detailGetController,
detailUpdateController,
 detailDeleteController
} = require("../controller/detailController");

const DetailRouter = express
  .Router()
  .post("/user/:id/detail", detailPostController)
  .get("/detail/:id", detailGetControllerById)
  .get("/details", detailGetController)
  .patch("/detail/:id", detailUpdateController)
  .delete("/detail/:id", detailDeleteController);

module.exports = DetailRouter;