const Register = require("../models/Registers");
const AccountLoginHistory = require("../models/AccountLoginHistory");

const forgetPasswordBegin = function (req, res) {
  console.log("email: " + req.body.email);
  // res.json({code:200, msg: req.params.email})

  res.render("ResetPassword", { email: req.body.email });
};

module.exports = forgetPasswordBegin;
