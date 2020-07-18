const nodemailer = require('nodemailer');

async function main(destiny, text, subject, html){
     let testAccount = await nodemailer.createTestAccount();

     console.log(destiny, text, subject)

     let transporter = nodemailer.createTransport({
         host: "smtp.ethereal.email",
         port: 587,
         secure: false,
         auth: {
             user: 'gaylord.hilpert31@ethereal.email',
             pass: 'HSh3qzAMgE24bKFhv4',
         }
     });

     let info = await transporter.sendMail({
         from: '"Fred" <foo@example.com>',
         to: destiny,
         subject: subject,
         text: text,
         html: html,
     });

     console.log("Message sent: %s", info.menssageId);

     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = main;