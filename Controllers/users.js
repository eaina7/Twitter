const pool = require("../DBConfig/dbconfig");
const express = require("express");

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
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      console.log("I am in");
      const dbResponse = await pool.query("SELECT * FROM users WHERE id=$1", [
        id,
      ]);
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
  getMessagesByUser: async (req, res) => {
    const { id } = req.params;
    // id, text, date, url, name
    try {
      const data = await pool.query(
        "SELECT messages.id, text, users.name, date, messages.url  FROM messages JOIN users ON users.id = messages.user_id WHERE users.id = $1",
        [id]
      );
      res.json({
        code: 200,
        operation: "success",
        description: "Fetched all posts",
        data: data.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).send("A Team, there is a problem!");
    }
  },

  addUser: (req, res) => {
    const { name, email, password, url } = req.body;

    pool
      .query(
        "INSERT INTO users(name, email, password, url) values($1, $2, $3, $4);",
        [name, email, password, url]
      )
      .then((data) => res.status(201).json(data))
      .catch((e) => res.sendStatus(404));
  },
};
