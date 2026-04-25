const express = require("express");
const routes = express.Router();
const productsController = require("../controllers/products");

routes.get("/", productsController.getShop);
routes.get("/details/:id", productsController.getDetails);
routes.post("/cart/add", productsController.addToCartProduct);

module.exports = routes;
