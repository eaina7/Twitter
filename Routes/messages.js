const pool = require("../DBConfig/dbconfig");
const express = require ("express");
const router = express.Router();

console.log(DBUSER);

router.get("/messages", 

    async (_, res) => {
    try {
      const dbResponse = await pool.query('SELECT * FROM messages');
      res.json({
        code: 200,
        message: "success",
        data: dbResponse.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500);
    }
  })


  module.exports= router;