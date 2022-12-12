const express = require("express");
const routes = express.Router();

const homeController = require("../controllers/homeController");

// GET
// get homepage
routes.get("/", homeController.getHomePage);
routes.get("/package/:id", homeController.getPackage);

module.exports = routes;
