module.exports = () => (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );

  res.setHeader("*");

  next();
};
// "Access-Control-Allow-Headers",
// "Content-Type, X-Authorization"
