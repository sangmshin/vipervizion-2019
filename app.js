const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer')
const compression = require('compression')
const helmet = require('helmet')
const request = require('request')
const sanitizeHTML = require('sanitize-html')
const secrets = require('./config/secrets')

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet())

// DEPLOY MODE
app.use(express.static(path.join(__dirname, 'public')));

// PRE-DEPLOY TEST MODE 
// app.use(express.static(path.join(__dirname, 'build')));

app.use(compression())


app.get('/api', function (req, res) {

  const url = 'https://vipervizion-2020.s3.amazonaws.com/data/data.json';

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {

      const result = JSON.parse(body);

      res.json(result);

    } else {
      console.log(error, response);
    }
  });

});

app.post('/send', (req, res, next) => {

  const { name, email, message } = req.body;
  console.log(name, email, message);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: secrets.nodemailer.user,
      pass: secrets.nodemailer.pass
    }
  })
  
  var mailOptions = {
    from: sanitizeHTML(email),
    to: 'viperchin@gmail.com',
    subject: `${sanitizeHTML(name)} has sent you a message. < ${sanitizeHTML(email)} >`,
    text: `${sanitizeHTML(message)}`,
    replyTo: sanitizeHTML(email)
  };

  transporter.sendMail(mailOptions, (_err, _res) => {
    _err 
      ? console.log('There was an error', _err)
      : res.send(_res)
  })
})


// SERVER
app.listen(port, console.log(`Listening on port ${port}...`));