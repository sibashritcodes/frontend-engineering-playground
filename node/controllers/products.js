const path = require("path");
const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    docTitle: "Add product",
    path: "/admin/add-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  const { name, imageURL, price, description } = req.body;
  new Product(name, imageURL, price, description).save();
  res.redirect("/");
};

exports.getProfile = (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "admin", "admin-profile.html"),
  );
};

exports.getAllProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.json(products);
  });
};

exports.getShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/shop", {
      documentTitle: "Shop",
      prods: products,
      path: "/shop",
    });
  });
};

exports.getDetails = (req, res, next) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).send("Invalid Product ID, Go back.");
  }
  Product.getProductFromId(id, (product) => {
    res.render("shop/details", {
      documentTitle: "Product details",
      product: product,
      path: "/details",
    });
  });
};

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      documentTitle: "Admin Products",
      prods: products,
      path: "/admin/products",
    });
  });
};

exports.deleteProduct = (req, res, next) => {
  const { name } = req.body;
  Product.delete(name);
  res.redirect("/");
};

exports.addToCartProduct = (req, res, next) => {
  const { id } = req.body;
  Cart.addProduct(id);
  res.redirect("/");
};
