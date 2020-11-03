const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const santa = require('../routes/santa');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(bodyParser());
    app.use(morgan());
    app.use(express.static('public'));
    
    app.use('/', santa);

    app.use(error);
}