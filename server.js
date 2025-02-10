const express = require("express");

const app = express();
const port = 4000;
// const popular = require("./util/movie-data");
const cors = require("cors");

app.use(cors());

const movie = require("./util/movie-data");

app.get("/movie", (req, res) => {
  res.send(movie);
});

app.listen(port);
