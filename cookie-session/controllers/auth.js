exports.getLogin = (req, res) => {
  console.log(req.session.isLoggedIn)
  res.render("auth/login", {
    path: "/login",
    pageTitle: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res) => {
  req.session.isLoggedIn = true
  res.redirect("/");
};
