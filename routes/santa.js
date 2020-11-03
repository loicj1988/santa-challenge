const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();


router.get('/', (request, response) => {
    response.render('index', { userid:"", wish:"", error:"" });
});

router.post('/', [
    check('userid', 'The name is required').exists().isLength( { min:1 }),
    check('userid', 'The name must be less than 30 characters').isLength( { max:30 }),
    check('wish', 'The name is required').exists().isLength( { min:1 }),
    check('wish', 'The name must be less than 100 characters').isLength( { max:100 }),
], (request, response) => {
    const { wish, userid } = { ...request.body };
    
    const errors = validationResult(request);
    if(!errors.isEmpty()) {
        return response.status(400).send(errors.array().map(e => e.msg).join(','));
    }

    response.render('index', { userid, wish, error:"" });
});

module.exports = router;