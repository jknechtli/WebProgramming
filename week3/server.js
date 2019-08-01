// const http = require('http');
// const routes = require('./route.js');

// http.createServer(routes.handleRequest).listen(3000);









const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/www'));

const server = http.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('My First Nodejs Server.')
  console.log('Server listening on: ' + host + ' port: ' + port);
})

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/www/test.html')
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/www/login.html')
});

require('./routes/accountroute.js')(app, data)