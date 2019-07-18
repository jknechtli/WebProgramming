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


// const routes = require('./route.js')

http.listen(3000)
