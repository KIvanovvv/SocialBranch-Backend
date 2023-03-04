const express = require("express");
const CORS = require("../middlewares/CORS.js");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(CORS());


module.exports = app;
