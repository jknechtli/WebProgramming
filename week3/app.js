const express = require('express');
const formidable = require('formidable');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/www/index.html');
});

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/www/test.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/www/login.html');
});

app.post('/', (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse();
  form.on('fileBegin', (name, file) => {
    file.path = `${__dirname}/uploads/${file.name}`;
  });

  form.on('file', (name, file) => {
    console.log('uploaded shit: ' + file.name)
  })

  res.sendFile(__dirname + '/www/index.html')

});

app.post('/login/attempt', (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse();
  form.on('fileBegin', (name, file) => {
    file.path = `${__dirname}/uploads/${file.name}`;
  });

  form.on('file', (name, file) => {
    console.log('uploaded shit: ' + file.name)
  })

  res.sendFile(__dirname + '/www/index.html')

});

app.listen(3000)



// const fs = require('fs');

// const data = fs.readFileSync('testFile.txt', 'utf8');

// console.log(data)

// fs.writeFile('test.txt', 'Mongoloid', (err) => {
//   if (err) {
//     console.log(err)
//   }
//   else {

//     console.log('complete')
//   }
// })

// // fs.readFile('testFile.txt', (err, data) => {
// //   if (err) { throw err; }
// // })