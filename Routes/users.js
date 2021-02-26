const express = require ("express");
const router = express.Router();

router.get("/users", (req,res) =>res.send("Eric is the sex machine"));


module.exports= router;