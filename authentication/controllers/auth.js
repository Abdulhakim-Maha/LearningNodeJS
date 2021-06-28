const crypto = require("crypto");

const User = require("../models/user");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require("bcryptjs");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false,
  });
};

exports.getReset = (req, res) => {
  res.render("auth/reset", {
    path: "/reset",
    pageTitle: "Reset Password",
  });
};

exports.postReset = (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect("/reset");
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res.redirect("/reset");
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then((result) => {
        res.redirect("/");
        transporter
          .sendMail({
            to: req.body.email,
            from: '"austiniqer </>" <63011075@kmitl.ac.th>',
            subject: "Password reset",
            html: "<h1> Click this link to reset</h1>",
            // html: `
            //       <p>You requested a password reset </p>
            //       <p>Click this <a href="http://localhost:3000/reset/${token}>link</a> to set a new password. </p>
            //   `,
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.redirect("/login");
      }
      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          //parameter that it provides is boolean and if do match param == true othewise fase
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user; //set user authen
            return req.session.save((err) => {
              //session.save() that to make sure it has been set in session before continue
              console.log(err);
              res.redirect("/");
            });
          } else {
            res.redirect("/login");
          }
        })
        .catch((err) => {
          console.log(err);
          res.redirect("/login");
        });
    })
    .catch((err) => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        return res.redirect("/signup");
      }
      bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: {
              items: [],
            },
          });
          return user.save();
        })
        .then((result) => {
          res.redirect("/login");
          return transporter.sendMail({
            to: email,
            from: '"austiniqer </>" <63011075@kmitl.ac.th>',
            subject: "Sign up succeeded!",
            html: "<h1> Your successfully sign up!</h1>",
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
//hello world
exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
