let express = require('express');
let app = express();

app.get('/', (req, res) => {
    console.log("Hello World")
  res.send('Hello Express');
});

module.exports = app;