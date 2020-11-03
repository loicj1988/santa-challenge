const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

router.post('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

module.exports = router;