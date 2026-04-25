const express = require("express");
const routes = express.Router();
const productsController = require("../controllers/products");

routes.get("/add-product", productsController.getAddProduct);

routes.post("/product", productsController.postAddProducts);

routes.get("/profile", productsController.getProfile);

routes.get("/getAllProducts", productsController.getAllProducts);

routes.get("/products", productsController.getAdminProducts);

routes.post("/deleteProduct", productsController.deleteProduct);

module.exports = routes;
