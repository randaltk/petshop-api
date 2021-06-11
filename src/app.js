"use strict";

const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Carrega as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
