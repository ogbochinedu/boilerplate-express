require('dotenv').config();

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let path = require('path');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/json', (req, res) => {
  let message = 'Hello json';
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message });
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ time: req.time });
});

app.get('/:word/echo', (req, res) => {
  let word = req.params.word;
  res.json({ echo: word });
});

app.get('/name', (req, res) => {
  let firstname = req.query.first;
  let lastname = req.query.last;
  res.json({ name: `${firstname} ${lastname}` });
});

app.post('/name', (req, res) => {
  let firstname = req.body.first;
  let lastname = req.body.last;
  res.json({ name: `${firstname} ${lastname}` });
});

module.exports = app;