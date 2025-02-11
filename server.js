// import {express} from `express` require = import
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const port = 4000;
app.use(bodyParser());
// const cors = require("cors");
// app.use(cors());

const movies = require("./util/upcoming-movieData");

// route
// app.get("/", (req, res) => {
//   res.send(movie);
// });

// app.listen(port);
// client-s ogoh , fetch http methods
// app.post("/", (request, response) => {
//   console.log(request.body);
//   response.send("Success,Post requiesing working");
// });

// new //
let users = [];
const addUsers = (userData) => {
  users.push(userData);
  console.log(users);
};
app.post("/user", (request, response) => {
  addUsers(request.body);
  response.send("SW-User succesfully added");
});
// app.post("/user", (req, res) => {
//   addUsers(req.body);
//   res.send(users);
// });

app.listen(4000, () => {
  console.log(`app is running on ${4000}`);
});
app.get("/user", (request, response) => {
  response.send(users);
});
// put // oruulsna zasna
// app.put("/user", (request, response) => {
//   const { name, age, gender } = request.body;
//   const user = users.find((user) => name === user.name);
//   user.age = age;
//   user.send("User edited");
// });

app.delete("/user", (request, response) => {
  let { name } = request.body;
  const newUsers = users.filter((user) => user.name !== name);
  // addUsers(request.body);
  users = newUsers;
  response.send("User succesfully deleted!");
});

app.put("/user", (req, res) => {
  const { name, year, star } = req.body;
  let edit = users.find((user) => {
    return user.name == name;
  });
  edit.year = year;
  edit.star = star;
  res.send("User edited");
});
