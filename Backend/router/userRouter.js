const express = require("express");
const {
  userPostController,
  userGetControllerById,
  usersGetController,
  userUpdateController,
  useDeleteController,
  userlogin,
} = require("../controller/userController");

const UserRouter = express
  .Router()
  .post("/user", userPostController)
  .post("/login", userlogin)
  .get("/user/:id", userGetControllerById)
  .get("/users", usersGetController)
  .patch("/user/:id", userUpdateController)
  .delete("/user/:id", useDeleteController);
// [authorizer({ type: "user" })],
module.exports = UserRouter;
