const AccountLoginHistory = require('../models/AccountLoginHistory')

const logout = function(req, res){

    const accountLogin = new AccountLoginHistory({
        uemail: req.body.uemail,
        ip: req.body.ip,
        browser: req.body.browser,
        os: req.body.os,
        device: req.body.device,
        active: 'true'
    })

    AccountLoginHistory.findOneAndUpdate({uemail: req.body.uemail,
        ip: req.body.ip,
        browser: req.body.browser,
        os: req.body.os,
        device: req.body.device,},{$set:{active: 'false'}}, function(err){
            if(err){
                console.log(err)
                res.json({err: true, msg: "Logout not successful"})
            }else{
                res.json({err:false, msg: "Logout successful"})
            }
        })
}

module.exports = logout