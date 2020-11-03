const nodemailer = require('nodemailer');
const winston = require('winston');
const { sendMail } = require('../utils/mail');
const { getDateYYYMMHHmmssPretty } = require('../utils/dates');
const { getPendingUsers, setUserStatus } = require('../store/mail');

module.exports = function () {
    
    // Send mail loop
    setInterval(() => {
        // Get target users
        const usersToSendMail = getPendingUsers();
        if(usersToSendMail.length == 0) {
            winston.info('No users in mail list');
            return;
        }

        let mailContent = 
`This is a mail report for santa san.
Please check the list of user's wishes !
=========================================
`;

        usersToSendMail.forEach(u => {
            mailContent += 
`User : ${u.userName}
Address : ${u.userProfile.address}
Wish : ${u.wish}
-----------------------------------------
`;
        });

        let mailSubject = `Santa report ${getDateYYYMMHHmmssPretty()}`;

        setUserStatus(usersToSendMail, 'sending');
        sendMail(mailSubject, mailContent)
            .then(() => { 
                setUserStatus(usersToSendMail, 'completed');
                winston.info('Santa mail report sent completed');
            })
            .catch((ex) => { 
                setUserStatus(usersToSendMail, 'error');
                winston.info('Santa mail report sent error');
            });

    }, process.env.MAIL_SEND_INTERVAL);

}