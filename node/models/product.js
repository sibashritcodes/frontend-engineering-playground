const fs = require("fs");
const path = require("path");
const products = [];

const readFromFile = (cb) => {
  fs.readFile(
    path.join(__dirname, "..", "data", "products.json"),
    (error, data) => {
      if (!error) {
        return cb(JSON.parse(data));
      }
      return cb([]);
    },
  );
};

const writeFile = (fileContent) => {
  fs.writeFile(
    path.join(__dirname, "..", "data", "products.json"),
    JSON.stringify(fileContent),
    (error) => {
      if (error) {
        console.log("Not able to save the file");
      }
    },
  );
};

module.exports = class Product {
  constructor(name, imageURL, price, description) {
    this.name = name;
    this.imageURL = imageURL;
    this.price = price;
    this.description = description;
  }
  save() {
    readFromFile((fileContent) => {
      const maxId =
        fileContent.length > 0
          ? Math.max(...fileContent.map((p) => p.id || 0))
          : 0;

      this.id = maxId + 1;

      fileContent.push(this);
      writeFile(fileContent);
    });
  }
  static fetchAll(cb) {
    readFromFile(cb);
  }
  static delete(name) {
    readFromFile((fileContent) => {
      const filteredContent = fileContent.filter((item) => item.name !== name);
      writeFile(filteredContent);
    });
  }
  static getProductFromId(id, cb) {
    Product.fetchAll((products) => {
      const selectedProduct = products.find((product) => product.id === id);
      cb(selectedProduct);
    });
  }
};
