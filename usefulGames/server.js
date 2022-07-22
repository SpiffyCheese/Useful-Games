
const http = require('http');

const hostname = '192.168.77.111';
const port = 3000;

//Globals
let connections = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('useful-games.com\nby SpiffyCheese');
  connection();

});

function connection() {

    connections++;
    console.log('connection: ' + connections);

}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
