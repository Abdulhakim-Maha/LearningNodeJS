const User = require("../models/user");

exports.getLogin = (req, res) => {
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res) => {
  User.findById("60d58882c7829a2b484f756b")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res) => {
  req.session.destroy((err) => {
    console.log(err)
    res.redirect('/')
  })
};