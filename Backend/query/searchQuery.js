const UserModel = require("../database/model/users");

exports.TempGetUsers = async (req) => {
  const result = await UserModel.find();
  return result;
};
