const http = require("http");
const fs = require("fs");
const PORT = 3000;

const render = (request, response) => {
  let url = request.url;
  url = url.endsWith("/") ? url : url + "/";
  let filename = "html/";
  switch (url) {
    case "/":
      filename += "index.html";
      break;
    case "/about/":
      filename += "about.html";
      break;
    case "/home/":
      filename += "home.html";
      break;
  }
  fs.readFile(filename, (error, content) => {
    let ctype = { "Content-type": "text/html" };
    if (!error) {
      response.writeHead(200, ctype);
      response.write(content);
      // this is another way to to
    } else {
      response.writeHead(404, ctype);
      response.write(error.message);
    }
    return response.end();
  });
};

const server = http.createServer(render).listen(PORT);
console.log(`Server in running on port ${PORT}`);
