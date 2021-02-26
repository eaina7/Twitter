// Module import

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Route Import
const usersRoute = require("./Routes/users");
const messagesRoute = require("./Routes/messages");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", usersRoute);
app.use("/", messagesRoute);

app.listen(3000, () => console.log("server is listening on port 3000"));
