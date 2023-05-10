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
  const {  amenities,Placetype,saftey ,image,price,mediumperiod,longperiod,shortperiod,description,bedrooms,rooms,bathrooms,parkings} = req.body;
  const {id} = req.params
  const objId = new mongoose.Types.ObjectId(id);

  const result = await new DetailSchema({
    bedrooms:bedrooms,
    amenities: amenities,
    Placetype:Placetype,
    saftey:saftey,
    image:image,
    price:price,
    mediumperiod:mediumperiod,
    longperiod:longperiod,
    shortperiod:shortperiod,
    description:description,
    userId:objId,
    rooms:rooms,
    bathrooms:bathrooms,
    parkings:parkings
    
  }).save();
  return result;
};

exports.uptadeDetailQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await DetailSchema.findById({ _id: objId });
  const { facilities, amenities,Placetype,saftey ,image,price,mediumperiod,longperiod,shortperiod,description,bedrooms,rooms,bathrooms,parkings} = req.body;

  await DetailSchema.findByIdAndUpdate(result, {
    facilities: facilities,
    amenities: amenities,
    Placetype:Placetype,
    saftey:saftey,
    image:image,
    price:price,
    mediumperiod:mediumperiod,
    longperiod:longperiod,
    shortperiod:shortperiod,
    description:description,
    rooms:rooms,
    bathrooms:bathrooms,
    parkings:parkings,
    bedrooms:bedrooms,
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