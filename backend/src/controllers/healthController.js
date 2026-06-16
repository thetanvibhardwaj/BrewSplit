const healthCheck = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "BrewSplit API Running 🚀",
  });
};

module.exports = {
  healthCheck,
};