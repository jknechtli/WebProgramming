const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/www'));

app.listen(3000, () => {
  const d = new Date();
  const n = d.getHours();
  const m = d.getMinutes();
  console.log(`Server has been started at : ${n}:${m}`);
});

app.get('/', (req, res) => {
  console.log('hit')
  res.sendFile(__dirname + '/www/form.html');
});

app.post('/api/login', (req, res) => {
  const users = [{ email: 'abc@com.au', password: '123' }];

  if (!req.body) {
    return res.sendStatus(400);
  }

  const customer = {};
  customer.email = req.body.email;
  customer.upwd = req.body.upwd;
  customer.valid = false;

  users.forEach(user => {
    if (req.body.email === user.email && req.body.upwd === user.upwd) {
      customer.valid = true;
    }
  });

  res.send(customer);
})

// const server = http.listen(3000, () => {
//   const host = server.address().address;
//   const port = server.address().port;
//   console.log('My First Nodejs Server.')
//   console.log('Server listening on: ' + host + ' port: ' + port);
// })

// app.get('/test', (req, res) => {
//   res.sendFile(__dirname + '/www/test.html')
// });

// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/www/login.html')
// });

// require('./routes/accountroute.js')(app)