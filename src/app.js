"use strict";

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Conecta no banco
mongoose.connect(
  "mongodb+srv://randaltk:dorotitk1@cluster0.avwfj.mongodb.net/petshop-api?retryWrites=true&w=majority"
);

// Carrega os Models

const Product = require("./models/product");

// Carrega as Rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
