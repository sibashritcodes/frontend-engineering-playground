const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

const notFoundController = require("./controllers/404");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const express = require("express");

const app = express();

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(notFoundController.getNotFound);

app.listen(3000);
