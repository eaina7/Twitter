const express = require("express");
const router = express.Router();
const usersControllers = require("../Controllers/users");

router.get("/users", usersControllers.getAll);
router.post("/user", usersControllers.addUser);

module.exports = router;
