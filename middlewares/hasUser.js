const jwt = require("jsonwebtoken");

const secretStr = "asdawdaafwaea2321ad";

module.exports = () => (req, res, next) => {
  if (req.headers["x-authorization"]) {
    token = jwt.verify(req.headers["x-authorization"], process.env.JWT_SECRET);
    req.user = token;
  }
  next();
};
