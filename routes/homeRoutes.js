const express = require("express");
const routes = express.Router();

const todoController = require("../controllers/homeController");

// GET
// get homepage
routes.get("/", todoController.getHomePage);

module.exports = routes;
