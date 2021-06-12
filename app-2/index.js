const express = require("express");
const path = require("path");
const app = express();
const DUMMY_DATA = require("./Members");
const logger = require('./middleWare/logger')

// app.get("/", (reg, res) => {
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

//Init middleware
// app.use(logger);
//GEt all Members
app.get("/api/members", (req, res) => res.json(DUMMY_DATA));

//Get Single Member
// app.get('api/members/:id',(req, res) =>{
// 	res.json()
// })
//Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
