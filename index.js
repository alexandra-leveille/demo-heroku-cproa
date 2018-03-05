// jshint esversion:6

const express = require('express');
const app = express();

app.use('/', express.static(__dirname +'/front/build'));

app.get('*', (req, res) => {
  //res.send('Hello CPROA');
  res.sendFile(__dirname + '/front/build/index.html');
});

const port = process.env.PORT || 3000;

app.listen( port, () => {
  console.log('connected');
});
