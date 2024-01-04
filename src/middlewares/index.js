const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { LOCAL_CLIENT, CLIENT } = require("../config/defaults");

const applyMiddleware = (app) => {
  app.use(
    cors({
      origin: [LOCAL_CLIENT, CLIENT, "http://localhost:5173"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(bodyParser.json());
};

module.exports = applyMiddleware;
