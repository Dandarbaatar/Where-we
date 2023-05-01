const express = require("express");
const UserRouter = require("./router/userRouter");

const { connectDb } = require("./database/db");
const cors = require("cors");

const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRouter);

module.exports = app;
const startServer = async () => {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
};

startServer();