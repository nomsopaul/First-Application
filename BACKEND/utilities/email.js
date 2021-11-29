const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

// new Email(user, url).sendWelcome();

module.exports = class Email {
    constructor(user, url) {
        this.to = user.email;
        this.firstName = user.name.split(' ')[0];
        this.url = url;
        this.from = `Eazzy Laundry <${process.env.EMAIL_FROM}>`;
    }

    createTransport() {
      if(process.env.NODE_ENV === 'production') {
          //Sendgrid
          return 1;
      }
      
      return nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        }
      });
    }

    send(template, subject) {
        //Render HTML based on pug template
        const html = pug.renderFile(`${__dirname}/../views/emails/${template}.pug`)

        //Define the email options
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            html,
            text: htmlToText.fromString(html)
        };

        //Create a transport and send email
    }

    sendWelcome() {
        this.send('welcome', 'Welcome to Eaxxy Family!');
    }
};

const sendEmail = async options => {
    const mailOptions = {
        from: 'Eazzy Laundry <eazzylaundry@compugeen.com>',
        to: options.email,
        subject: options.subject,
        text: options.message
    };


    await transporter.sendEmail(mailOptions);
};