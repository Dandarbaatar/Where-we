const DetailModel = require("../database/model/detail");
const UserModel = require("../database/model/users");

exports.GetDetails = async (req) => {
  const result = await DetailModel.find({}).limit(3);
  const userId = await UserModel.find({});
  return [result, userId];
};
exports.GiveReq = async (req) => {
  const { period, location, guests, placetype } = req.body;
};
