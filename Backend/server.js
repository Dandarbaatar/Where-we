const express = require("express");
const UserRouter = require("./router/userRouter");
const DetailRouter = require( "./router/detailRouter");
const { connectDb } = require("./database/db");

const cors = require("cors");
const SearchRouter = require("./router/searchRouter");
const bodyParser = require('body-parser')


const PORT = 8000;


const app = express();
app.use(cors());
app.use(bodyParser.json()) 
app.use(UserRouter);

app.use(SearchRouter);

app.use(DetailRouter)


app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


module.exports = app;
const startServer = async () => {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
};

startServer();
