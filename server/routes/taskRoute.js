const express = require("express");
const router = express.Router();
const routeControllers = require("../controllers/taskController")

router.get("/", routeControllers.getTask);

module.exports = router