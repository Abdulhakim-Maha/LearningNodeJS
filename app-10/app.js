const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const users = []
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
  res.render('index', {
	  title : 'Add User'
  });
});

app.get("/users", (req, res) => {
  res.render('users', {
	  title: 'Users',
	  users: users
  });
});

app.post("/add-user", (req, res) => {
	users.push({name: req.body.username})
	res.redirect('/users')
});
app.listen(3000);
