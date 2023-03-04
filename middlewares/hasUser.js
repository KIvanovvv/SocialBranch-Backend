const jwt = require("jsonwebtoken");

const secretStr = "asdawdaafwaea2321ad";

module.exports = () => (req, res, next) => {
  token = jwt.verify(
    req.headers["x-authorization"],
    secretStr,
    (err, token) => {
      if (err) {
        res.status(403).json("From middleware");
      }
      next();
    }
  );
};
