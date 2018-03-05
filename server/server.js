const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./user");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/newRecipes");

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.post("/newuser", (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    res.status(422).json({ error: "You need a username" });
  } else if (!password) {
    res.status(422).json({ error: "You need a password" });
  } else {
    const newUser = new User({ username, password });
    newUser
      .save()
      .then(user => {
        res
          .status(200)
          .json({ success: `${user.username} successfully created.` });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "Error creating the new user. Try again." });
      });
  }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
