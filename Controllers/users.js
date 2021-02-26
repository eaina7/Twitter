const pool = require("../DBConfig/dbconfig");
const express = require("express");
const router = express.Router();

module.exports = {
  getAll: async (_, res) => {
    try {
      console.log("I am in");
      const dbResponse = await pool.query("SELECT * FROM users");
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
  },
  addUser: (req, res) => {
    const { name, email, password, url } = req.body;
    console.log(req.body);
  
    pool
      .query("INSERT INTO users(name, email, password, url) values($1, $2, $3, $4);", [
        name,
        email,
        password,
        url
      ])
      .then((data) => res.status(201).json(data))
      .catch((e) => res.sendStatus(404));
  });
  
};
