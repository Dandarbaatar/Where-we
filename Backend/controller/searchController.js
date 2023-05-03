const { TempGetUsers } = require("../query/searchQuery");

exports.TempGetUsers = async (req, res) => {
  try {
    const result = await TempGetUsers(req);
    res.send({ result });
  } catch (err) {
    res.send({ err });
  }
};
