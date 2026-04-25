const Product = require("./product");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "cart.json");

const readFromFile = (cb) => {
  fs.readFile(filePath, (error, data) => {
    if (!error) {
      const parsedData = JSON.parse(data);

      return cb({
        products: parsedData.products || [],
        totalPrice: parsedData.totalPrice || 0,
      });
    }

    // ✅ Default fallback
    return cb({ products: [], totalPrice: 0 });
  });
};

const writeFile = (fileContent) => {
  fs.writeFile(filePath, JSON.stringify(fileContent), (error) => {
    if (error) {
      console.log("Not able to save the file");
    }
  });
};

module.exports = class Cart {
  static addProduct(id) {
    readFromFile((cart) => {
      Product.fetchAll((products) => {
        const selectedProduct = products.find((item) => item.id === Number(id));

        if (!selectedProduct) return;

        const existingProductIndex = cart.products.findIndex(
          (prod) => prod.id === Number(id),
        );

        if (existingProductIndex !== -1) {
          cart.products[existingProductIndex].quantity += 1;
        } else {
          cart.products.push({
            id: selectedProduct.id,
            quantity: 1,
          });
        }

        cart.totalPrice += Number(selectedProduct.price);

        writeFile(cart);
      });
    });
  }
};
