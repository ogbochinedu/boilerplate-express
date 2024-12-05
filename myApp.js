let express = require('express');
let app = express();
let path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;