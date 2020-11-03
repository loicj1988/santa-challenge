// init project
const express = require('express');
const logger = require("./middleware/logger");

const app = express();
const router = express.Router();

require('./startup/mail')();
require('./startup/routes')(app);

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  logger.info('Your app is listening on port ' + listener.address().port);
});
