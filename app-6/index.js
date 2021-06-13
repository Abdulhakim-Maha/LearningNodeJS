const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
	res.render('index',{
		name: 'austiniqer',
		lastname: 'maha',
		age: 19,
		status: 'single',
		number: 5
	})
})
app.listen(5000, () => console.log('Server started on port 5000'))