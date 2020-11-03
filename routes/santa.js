const express = require('express');
const { check, validationResult } = require('express-validator');
const { getUserByUsername, getUserProfile } = require('../services/userService');
const { calculateAge } = require('../utils/dates');
const { addUser } = require('../store/mail');

const router = express.Router();

router.get('/', (request, response) => {
    response.render('index', { userid:"", wish:"", error:"" });
});

router.post('/', [
    check('userid', 'The name is required').exists().isLength( { min:1 }),
    check('userid', 'The name must be less than 30 characters').isLength( { max:30 }),
    check('wish', 'Wish is required').exists().isLength( { min:1 }),
    check('wish', 'Wish name must be less than 100 characters').isLength( { max:100 }),
], async (request, response) => {
    const { wish, userid } = { ...request.body };
    
    // Form validation
    const errors = validationResult(request);
    if(!errors.isEmpty()) {
        return response.status(400).send(errors.array().map(e => e.msg).join(','));
    }
    
    // Fetch user
    const user = await getUserByUsername(userid);
    if(!user) {
        return response.render('index', { userid, wish, error:"User is not registered" });
    }

    // Fetch user profile
    const userProfile = await getUserProfile(user.uid);
    if(!userProfile) {
        return response.render('index', { userid, wish, error:"User profile is not registered" });
    }

    // Check age
    const age = calculateAge(userProfile.birthdate);
    if(age > 10) {
        return response.render('index', { userid, wish, error:"You are over 10 years old !" });
    }

    // Add user to mailing process list
    addUser(userid, wish, userProfile);

    response.render('index', { userid, wish, error:"" });
});

module.exports = router;