const express = require("express");
const completeToDo = require("../controllers/completeToDo");
const createToDo = require("../controllers/createToDo");
const deleteToDo = require("../controllers/deleteToDo");
const getToDos = require("../controllers/getAllToDo");
const updateToDo = require("../controllers/updateToDo");
const authMiddleware = require("../middlewares/authHandler")
const router = express.Router();


router.route("/create").post(authMiddleware, createToDo)

router.route("/update/:id").post(updateToDo)

router.route("/delete/:id").post(deleteToDo)

router.route("/complete/:id").post(completeToDo)

router.route("/get-all").get(authMiddleware, getToDos)

module.exports = router