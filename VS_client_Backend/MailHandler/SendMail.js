var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pandeyaashish100@gmail.com',
    pass: 'touzmasfoowxtjhc'
  }
});

module.exports = transporter

