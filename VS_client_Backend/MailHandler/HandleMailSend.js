const transporter = require('./SendMail')

const HandleMailSend = function(req, res){


    var mailOptions = {
        from: 'pandeyaashish100@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        html: '<h1>Welcome To Password Reset</h1><p>We are working on this feature.<br/> Keep faith on us</p>'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.json({msg: error})
        } else {
          console.log('Email sent: ' + info.response);
          res.json({msg: info.response})
        }
      });
}

module.exports = HandleMailSend