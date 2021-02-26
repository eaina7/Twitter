// Module import
 const dotenv = require("dotenv");
dotenv.config(); 
console.log(process.env);
const express = require("express");
const app = express();

//Route Import
const usersRoute = require("./Routes/users");
const messagesRoute = require("./Routes/messages");

app.use("/", usersRoute);
app.use("/", messagesRoute);

app.listen(3000, () => console.log("server is listening on port 3000"));
