const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
const applyMiddleware = require("./middlewares");
require("dotenv").config();
const app = express();
const mysql = require("mysql");
applyMiddleware(app);

// Auth Routes
app.use(require("./routes/auth"));
// Students Routes
app.use(require("./routes/students"));

app.get("/health", (_req, res) => {
  res.send({ message: "Server is running...." });
});

const connection = mysql.createConnection({
  host: "103.148.14.130",
  user: "rpistude_testapi",
  password: "rpistude_testapi",
  database: "rpistude_testapi",
});

connection.connect();

app.get("/api/scholership_entries", (req, res) => {
  connection.query("SELECT * FROM scholership_entry", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.all("*", (req, _res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;
