module.exports = () => (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://kivanovvv.github.io/Social-Branch---React-Project/"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Authorization"
  );

  next();
};
