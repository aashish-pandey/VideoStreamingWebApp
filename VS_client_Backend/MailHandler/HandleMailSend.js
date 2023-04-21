const transporter = require("./SendMail");
const Users = require("../models/Registers");

const HandleMailSend = function (req, res) {
  console.log(req.body.email);

  Users.find({ uemail: req.body.email }, function (err, details) {
    if (err) {
      res.status(500).json({
        code: 200,
        msg: "Internal Server error in fetching records for this email",
      });
    } else {
      if (details.length == 0) {
        res.status(200).json({
          code: 200,
          msg: "No user with given email found. Try registering this email first",
        });
      } else {
        // <a href=\" http://localhost:3560/forgetPasswordBegin/${req.body.email} \">Click me to reset password</a>
        console.log("reached here1");

        var mailOptions = {
          from: "pandeyaashish100@gmail.com",
          to: req.body.email,
          subject: "JaalChitra Password Reset",
          html: `<h1>Welcome To Password Reset</h1><form action="http://localhost:3560/forgetPasswordBegin" method="post"><input type="hidden" name="email" value="${req.body.email}" /><input type="submit" style=" padding: 10px 13px 10px 13px; border-radius: 6px; color: white; background-color: red; border:none; cursor: pointer; " value="Click me to reset password"/></form>`,
        };

        console.log("reached here2");
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            res.status(500).json({ code: 200, msg: "Sending Email failed" });
          } else {
            res
              .status(200)
              .json({ code: 200, msg: "Check your email to change password" });
          }
        });
      }
    }
  });
};

module.exports = HandleMailSend;
