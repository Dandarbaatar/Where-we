const DetailSchema = require("../database/model/detail");
const mongoose = require("mongoose");


exports.getDetailDataById = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await DetailSchema.findById({ _id: objId });
  return result;
};

exports.detailsData = async (req) => {
  const result = await DetailSchema.find();
  return result;
};

exports.createDetailQuery = async (req) => {
  const { bedrooms,rooms,bathrooms,parkings,villa,house,ger,apartment,image,price,description,teleision,wifi,washer,balcony,cleaner,radio,lift,aircondioner,sanitizers,fire,daily,smoke,shortperiod,mediumperiod, longperiod} = req.body;
  const {id} = req.params
  const objId = new mongoose.Types.ObjectId(id);

  const result = await new DetailSchema({

    bedrooms:bedrooms,
    image:image,
    price:price,
    mediumperiod:mediumperiod,
    longperiod:longperiod,
    shortperiod:shortperiod,
    description:description,
    userId:objId,
    rooms:rooms,
    bathrooms:bathrooms,
    parkings:parkings,
    apartment: apartment,
    villa: villa,
    ger: ger,
    house: house,
    teleision:teleision,
    wifi:wifi,
    washer:washer,
    balcony:balcony,
    cleaner:cleaner,
    radio:radio,
    lift:lift,
    aircondioner:aircondioner,
    sanitizers:sanitizers,
    fire:fire,
    daily:daily,
    smoke:smoke
    
  }).save();
  return result;
};

exports.uptadeDetailQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await DetailSchema.findById({ _id: objId });
  const {  parkings,villa,house,ger,apartment} = req.body;

  await DetailSchema.findByIdAndUpdate(result, {
    bedrooms:bedrooms,
    image:image,
    price:price,
    mediumperiod:mediumperiod,
    longperiod:longperiod,
    shortperiod:shortperiod,
    description:description,
    userId:objId,
    parkings:parkings,
    apartment: apartment,
    villa: villa,
    ger: ger,
    house: house,
   
  });
  return result;
};

exports.detailDeleteController = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await DetailSchema.findById({ _id: objId });

  await DetailSchema.findByIdAndRemove(result);
  return result;
};