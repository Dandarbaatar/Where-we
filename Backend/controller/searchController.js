const { GetDetails } = require("../query/searchQuery");

exports.GetDetails = async (req, res) => {
  try {
    const result = await GetDetails(req);
    const temp = await GetDetails(req);
    res.send({ result, temp });
  } catch (err) {
    res.send({ err });
  }
};
