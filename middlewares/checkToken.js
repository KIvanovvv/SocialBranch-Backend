const jwt = require("jsonwebtoken");

const secretStr = "asdawdaafwaea2321ad";

module.exports = () => (req, res, next) => {
  if (req.headers["x-authorization"]) {
    console.log(req.headers["x-authorization"]);
  }
};
