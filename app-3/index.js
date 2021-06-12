const app = require("express")();
const path = require("path");
app.get('/', (req, res) =>{
	render(res,'html/index.html')
})
app.get('/about', (req, res) =>{
	render(res,'html/about.html')
})
app.get('/:name/:lastname', (req, res) => {
	res.send(`Your name is ${req.params.name} <br/> 
		${req.params.lastname} <br/>
		${req.hostname}${req.path}`)
})
app.use((req, res) => {
  res.sendFile('404 Page Not Found');
});
const render = (res, file) => {
	res.status(200)
	res.type('text/html')
	res.sendFile(path.join(__dirname, file))
}
app.listen(5000,() => {console.log('Server started on port 5000')});
