const UserSchema = require("../database/model/users");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

exports.getUserDataById = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  return result;
};

exports.getUserData = async (req) => {
  const result = await UserSchema.find();
  return result;
};

exports.createUserQuery = async (req) => {
  const { password, email, username,phonenumber } = req.body;

  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(password, salt);

  const result = await new UserSchema({
    password: hash,
    email: email,
    username: username,
    phonenumber:phonenumber
  }).save();
  return result;
};

exports.uptadeUserQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  const { username, password, email ,phonenumber} = req.body;

  await UserSchema.findByIdAndUpdate(result, {
    username: username,
    password: password,
    email: email,
    phonenumber:phonenumber
  });
  return result;
};

exports.userDeleteController = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });

  await UserSchema.findByIdAndRemove(result);
  return result;
};