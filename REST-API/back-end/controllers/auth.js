const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator/check");

exports.signup = (req, res, next) => {
  //Check wether validation has an error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  //end check
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then((hash) => {
      const user = new User({
        email: email,
        password: hash,
        name: name,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({ message: "User created!", userId: result._id ,author: 'austiniqer'});
    })
    .catch((err) => {
      if (err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
