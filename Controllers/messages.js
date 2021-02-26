const pool = require("../DBConfig/dbconfig");

module.exports = {
  getAll: async (_, res) => {
    //id, text, date, user_id, messages.url, users.name
    try {
      const dbResponse = await pool.query(
        "SELECT messages.id, text, date, user_id, messages.url, users.name FROM messages JOIN users ON users.id = messages.user_id"
      );
      res.json({
        code: 200,
        message: "success",
        data: dbResponse.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500);
    }
  },

  getByID: async (req, res) => {
    const { id } = req.params;
    try {
      const dbResponse = await pool.query(
        "SELECT messages.id, text, date, user_id, messages.url, users.name FROM messages JOIN users ON users.id = messages.user_id WHERE messages.id=$1",
        [id]
      );
      res.json({
        code: 200,
        message: "success. Found user with id " + id,
        data: dbResponse.rows[0],
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500);
    }
  },
};
