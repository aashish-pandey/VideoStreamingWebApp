const AccountLoginHistory = require('../models/AccountLoginHistory')

const accountLoginHistory = function(req, res){

    
    const accountLogin = new AccountLoginHistory({
        uemail: req.body.uemail,
        ip: req.body.ip,
        browser: req.body.browser,
        os: req.body.os,
        device: req.body.device,
        active: 'true',
    })

    accountLogin.save(function(err, details){
        if(err){
            console.log(err)
            res.json({err:true, msg: err})
        }else{
            console.log(details._id)
            res.json({err:false, msg: "account Login history saved successfully", _id: details._id})
        }
    })

}

module.exports = accountLoginHistory
