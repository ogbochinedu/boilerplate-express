require('dotenv').config();
let express = require('express');
let app = express();
let path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

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

module.exports = app;