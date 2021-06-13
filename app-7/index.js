const express = require('express')
const ejs = require('ejs')
const app = express()

//Registor
app.set('view engine','ejs')
app.use('/bootstrap',express.static(__dirname + '/node_modules/bootstrap/dist'))

//Route
app.get('/', (req, res) => {
	res.render('index',{
		title: 'Home'
	})
})
app.get('/products', (req, res) =>{
	res.render('products', {
		title: 'Products',
		products: {
			p1 : { name : 'JavaScript', price: 1000, color: 'yellow'},
			p2 : { name : 'Node.js', price: 1300, color: 'green'},
			p3 : { name : 'Express.js', price: 990, color: 'black'}
		}
	})
})

//Listen
app.listen(5000, () => console.log('Server started on port 5000'))