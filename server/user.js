const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 11;

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

UserSchema.pre("save", function(next) {
  bcrypt
    .hash(this.password, SALT_ROUNDS)
    .then(hashedPass => {
      this.password = hashedPass;
      next();
    })
    .catch(err => {
      res.status(500).json({ error: "Error encrpyting the password" });
    });
});

module.exports = mongoose.model("User", UserSchema);
