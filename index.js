const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.use('/dist', express.static(__dirname + 'dist'))
app.use('/js', express.static(__dirname + 'js'))
app.use('/img', express.static(__dirname + 'img'))
app.use('/css', express.static(__dirname + 'css'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);