let express = require('express');
let app = express();
let path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/json', (req, res) => {
  res.json({"message": "Hello json"});
});

module.exports = app;