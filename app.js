const reload = require('reload')
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var compression = require('compression')
var helmet = require('helmet')
var request = require('request')

var port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser(bodyParser.json()));
app.use(helmet())


// DEVELOPMENT MODE
// app.use(express.static(path.join(__dirname, 'public')));


// PRE-DEPLOY TEST MODE 
app.use(express.static(path.join(__dirname, 'build')));

app.use(compression())


app.get('/api', function (req, res) {

  var url = 'https://s3.amazonaws.com/sangminshin/vipervizion-2019/data/data.json';

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {

      var result = JSON.parse(body);

      res.json(result);

    } else {
      console.log(error, response);
    }
  });

});


// SERVER
app.listen(port, console.log(`Listening on port ${port}...`));


// LIVERELOAD
reload(app, {
  verbose: true
})