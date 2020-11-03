// init project
const winston = require('winston');
const express = require('express');

const app = express();
const router = express.Router();

require('./startup/mail')();
require('./startup/routes')(app);


// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
