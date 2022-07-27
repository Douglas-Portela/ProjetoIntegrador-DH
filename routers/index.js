const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('cadastro');
});

app.listen(3000, 0) ();