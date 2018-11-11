var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname, './build')));
app.use(bodyParser(bodyParser.json()));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', function(req, res) {
  // serve frontend
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(port, console.log(`Listening on port ${port}...`));
