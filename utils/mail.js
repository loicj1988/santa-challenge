const winston = require('winston');
const { transporter } = require('../config/mail');

module.exports.sendMail = async function (subject, content) {

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.MAIL_FROM, // sender address
        to: process.env.MAIL_TO, // list of receivers
        subject: subject, // Subject line
        text: content, // plain text body
    });
    winston.info(`Message sent: ${info.messageId}`, );
}