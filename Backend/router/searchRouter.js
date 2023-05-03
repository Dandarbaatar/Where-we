const express = require("express");
const { TempGetUsers } = require("../controller/searchController");

const SearchRouter = express.Router().get("/searchuser", TempGetUsers);

module.exports = SearchRouter;
