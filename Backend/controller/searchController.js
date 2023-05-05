const { GetDetails } = require("../query/searchQuery");

exports.GetDetails = async (req, res) => {
  try {
    const result = await GetDetails(req);
    res.send({ result });
  } catch (err) {
    res.send({ err });
  }
};
