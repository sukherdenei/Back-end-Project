// const db = require("../database/users-db");
const { users } = require("../database/users-db");
const { products } = require("../database/products-db");

const register = (req, res) => {
  //Garaas utga avav
  const { name, email, password, role } = req.body;

  //Create new user _id
  const lastUser = users[users.length - 1];
  const userId = lastUser._id + 1;
  newUser.createdAt = new Date();
  newUser.updatedAt = new Date();

  //Create new user
  const newUser = { _id: userId, name, email, password, role };
  //Users add new user
  users.push(newUser);
  res.send("Хэрэглэгч амжилттай бүртгэгдлээ");
};

const login = (req, res) => {
  const { name, password } = req.body;
  const checkUser = users.find((user) => user.name == name);
  if (checkUser && checkUser.password === password) {
    res.send("Хэрэглэгч та амжилттай нэвтэрлээ");
  } else {
    res.send("Амжилтгүй");
  }
};

const getProfile = (req, res) => {
  // const {name,password}=req.body;
  // const profile=
  res.send(users);
};

module.exports = {
  register,
  login,
  getProfile,
};
