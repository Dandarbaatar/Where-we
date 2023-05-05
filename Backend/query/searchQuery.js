const UserModel = require("../database/model/users");

exports.GetDetails = async (req) => {
  const result = await UserModel.find();
  return result;
};
exports.GiveReq = async (req) => {
  const { period, location, guests, placetype } = req.body;
};
