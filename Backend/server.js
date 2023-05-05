const express = require("express");
const UserRouter = require("./router/userRouter");
const DetailRouter = require( "./router/detailRouter");

const { connectDb } = require("./database/db");
const cors = require('cors');
const bodyParser = require('body-parser')

const PORT = 8000;


const app = express();
app.use(cors());
app.use(bodyParser.json()) 
app.use(UserRouter);
app.use(DetailRouter)

app.use(express.json());



module.exports = app;
const startServer = async () => {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
};

startServer();