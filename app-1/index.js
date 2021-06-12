const http = require("http");
const PORT = 3000;
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/html" });
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>My name is austiniqer</h1>
	<p>I'm currently learning back-end developer and nice to meet you </p>
</body>
</html>`;
  response.write(html);
  response.end();
});
server.listen(PORT);
console.log(`Server in running on port ${PORT}`);
