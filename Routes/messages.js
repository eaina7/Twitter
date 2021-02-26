const pool = require("../DBConfig/dbconfig");
const express = require("express");
const router = express.Router();

const messagesControllers = require("../Controllers/messages");


router.get("/messages", messagesControllers.getAll) 
router.get("/messages/:id", messagesControllers.getByID)


module.exports = router;
