// import {express} from `express` require = import
const express = require("express");

const app = express();
const port = 4000;

const cors = require("cors");
app.use(cors());

const movie = require("./util/upcoming-movieData");

// route
app.get("/movie", (req, res) => {
  res.send(movie);
});

app.listen(port);
