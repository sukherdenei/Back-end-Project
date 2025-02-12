// import {express} from `express` require = import
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const port = 4000;
app.use(bodyParser());
// const cors = require("cors");
// app.use(cors());
const { register, login, getProfile } = require("./services/user.controller");
// const { users } = require("./database/users-db");

// User Routes
app.post("/user/register", register);
app.post("/user/login", login);
app.get("/user", getProfile);

app.delete("/user", (request, response) => {
  let { name } = request.body;
  const newUsers = users.filter((user) => user.name !== name);
  // addUsers(request.body);
  users = newUsers;
  response.send("User succesfully deleted!");
});

app.listen(4000, () => {
  console.log(`app is running on ${4000}`);
});

// put // oruulsna zasna
// app.put("/user", (req, res) => {
//   const { name, year, star } = req.body;
//   let edit = users.find((user) => {
//     return user.name == name;
//   });
//   edit.year = year;
//   edit.star = star;
//   res.send("User edited");
// });
