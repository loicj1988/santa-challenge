const nodemailer = require('nodemailer');

// configure mail
module.exports.transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME, 
        pass: process.env.SMTP_PASSWORD, 
    },
});