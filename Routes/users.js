const express = require("express");
const router = express.Router();
const usersControllers = require("../Controllers/users");

router.get("/users/:id/messages", usersControllers.getMessagesByUser);
router.get("/users/:id", usersControllers.getUserById);
router.get("/users", usersControllers.getAll);
router.post("/users", usersControllers.addUser);

module.exports = router;
