const express = require("express");
const { GetDetails } = require("../controller/searchController");

const SearchRouter = express.Router().get("/searchdetails", GetDetails);

module.exports = SearchRouter;
