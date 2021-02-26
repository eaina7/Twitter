const pool = require("../DBConfig/dbconfig");
const express = require("express");
const router = express.Router();

router.get(
  "/messages",

  async (_, res) => {
    try {
      console.log("I am in");
      const dbResponse = await pool.query("SELECT * FROM messages");
      res.json({
        code: 200,
        message: "success",
        data: dbResponse.rows,
      });
      console.log("I am still in");
    } catch (e) {
      console.error(Error(e));
      res.status(500);
    }
  }
);

module.exports = router;
