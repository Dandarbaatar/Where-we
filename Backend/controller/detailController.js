const { getDetailDataById } = require("../query/detailQuery") ;
const { detailsData } = require("../query/detailQuery") ;
const  { createDetailQuery } =require( "../query/detailQuery");
const {uptadeDetailQuery} =require("../query/detailQuery") ;
const {detailDeleteController} =require("../query/detailQuery") ;
const DetailSchema = require("../database/model/detail");



exports.detailGetControllerById = async (req, res) => {
    try {
      const result = await getDetailDataById(req);
      res.send({ data: result });
    } catch (err) {
      res.send(err.message);
    }
  };
exports.detailGetController = async (req, res) => {
    try {
      const result = await detailsData(req);
      res.send({ data: result });
    } catch (err) {
      res.send(err.message);
    }
  };
  
  exports.detailPostController = async (req, res) => {
    try {
      await createDetailQuery(req);
      res.status(201).send(`Successfully created`);
    } catch (err) {
      res.status(400).send(err.message);
    }
  };
  
  exports.detailUpdateController = async (req, res) => {
    try {
      await uptadeDetailQuery(req);
      res.send(`Successfully updated `);
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.detailDeleteController = async (req, res) => {
    try {
      await detailDeleteController(req);
      res.send(`Successfully deleted `);
    } catch (err) {
      console.log(err);
    }
  };