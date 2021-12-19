const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const email = { ...data, from: 'utlab13@gmail.com' };

  try {
    await sgMail.send(email);
    return console.log('Email sent');
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
