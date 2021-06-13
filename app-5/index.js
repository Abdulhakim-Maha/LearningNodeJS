const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))

app.get('/', (req, res) =>{
	res.status(200)
	res.type('text/html')
	res.send('<a href="/index.html">Home</a>')
})



app.listen(5000, () => console.log('Server started on port 5000'))