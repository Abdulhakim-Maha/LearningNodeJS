const express =  require('express')
const app = express()

app.get('/', (req, res) => {
	let number = Math.random()
	if(number > 0.5){
		res.redirect('/value/' +number)
	}else{
		res.redirect('/error')
	}
})
app.get('/value/:number', (req, res) =>{
	res.type('text/html')
	res.status(200)
	let text = `
		value: ${req.params.number} <br/>
		<a href="/" >Back</a>	
	`
	res.send(text)
})
app.get('/error', (req,res) =>{
	res.type('text/html')
	res.status(200)
	res.send(`<a href="/" > go back </a>`)
})
app.listen(5000, () => console.log('Server started on port 5000'))