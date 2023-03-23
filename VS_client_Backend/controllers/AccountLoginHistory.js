const AccountLoginHistory = require('../models/AccountLoginHistory')
const Register = require('../models/Registers')
const UserPlan = require('../models/UserPlans')
const PlanAvailable = require('../models/PlanAvailable')

const accountLoginHistory = function(req, res){

    
    const accountLogin = new AccountLoginHistory({
        uemail: req.body.uemail,
        ip: req.body.ip,
        browser: req.body.browser,
        os: req.body.os,
        device: req.body.device,
        active: 'true',
    })

    
    
    //check if ip address is available
    var HomeAddress = ""
    var currentAddress = ""
    Register.find({uemail: req.body.uemail}, function(err, data){
        if(err){
            
            res.status(500).json({err:true, msg: err})
        }else{
            
            UserPlan.find({userEmail: req.body.uemail}, function(err, userPlandetails){
                if(err){
                    res.status(500).json({err:true, msg:err})
                }else{
                    if(userPlandetails.length == 0){
                        console.log("reached here")
                        res.status(500).json({err:"NAN", msg: "No subscription is taken from this account"})
                    }else{
                        console.log(userPlandetails)
                        PlanAvailable.find({planName: userPlandetails[0].activePlan}, function(err, plandetails){
                            if(err){
                                res.status(500).json({err:true, msg:err})
                            }else{
                                console.log(plandetails)
                                AccountLoginHistory.find({uemail:req.body.uemail, active:true}, function(err, activeLoginDetails){
                                    if(err){
                                        res.status(500).json({err:true, msg: err})
                                    }else{
                                        console.log("activelogin numbers: " + activeLoginDetails.length)
                                        console.log(data[0].HomeIpAddress)
                                        console.log(req.body.ip)
    
                                        HomeAddress = data[0].HomeIpAddress.substr(0, 7)
                                        currentAddress = req.body.ip.substr(0, 7)
                                        console.log(HomeAddress)
                                        console.log("SessionId")
                                        console.log(req.body.sessionId)
                                        if(activeLoginDetails.length >= plandetails[0].noOfDevice){
                                            console.log("1st if")
                                            res.status(403).json({err:true, msg: "Upgrade your plan, Maximum number of devices allowed in this plan are already active"})
                                        }else if(HomeAddress == currentAddress){
                                            console.log("2nd if")
    
                                            if(req.body.sessionId && req.body.sessionId != ''){
                                                AccountLoginHistory.remove({_id: req.body.sessionId}, function(err){
                                                    if(err)console.log("Error in removing previous login info when login using ip address")
                                                })
                                            }
                                            accountLogin.save(function(err, details){
                                                if(err){
                                                    console.log(err)
                                                    res.json({err:true, msg: err})
                                                }else{
                                                    console.log(details._id)
                                                    res.json({err:false, msg: "account Login history saved successfully", _id: details._id, data: data})
                                                }
                                            })
                        
                                        }
                                        else if(req.body.sessionId && req.body.sessionId != ''){
                                            AccountLoginHistory.find({_id: req.body.sessionId, uemail:req.body.uemail}, function(err, dt){
                                                if(err){
                                                    res.status(500).json({err:true, msg: "account login history find failed", errMsg: err})
                                                }else{
                                                    // console.log(dt[0].uemail)
                                                    // if(typeof(data[0].HomeIpAddress) == 'undefined'){
                                                        var onlyOneDevice = false
                                                        console.log("Bro")
                                                        // if(dt.length == 1)onlyOneDevice = true
                                                        if(dt.length > 0){
                                                            AccountLoginHistory.remove({_id: req.body.sessionId, uemail:req.body.uemail}, function(err){
                                                                if(err)res.status(500).json({err:true, msg: "error in removing previous account login history of this device", errMsg: err})
                                                            })
                                                            accountLogin.save(function(err, details){
                                                                if(err){
                                                                    console.log(err)
                                                                    res.json({err:true, msg: err})
                                                                }else{
                                                                    console.log(details._id)
                                                                    res.json({err:false, msg: "account Login history saved successfully", _id: details._id, data: data})
                                
                                                                    
                                
                                                                }
                                                            })
                                                        }else{
                                                            res.status(403).json({err: true, msg: "No session Id found and Home Address is also not set, Contact the admin"})
                                                        }
                                                // }else{
                                                //     res.status(500).json({err:true, msg: "Error in authorization of user in account login histories, contact admin"})
                                                // }
                                                }
                                            })
                                        }else{
                                            res.status(500).json({err:true, msg: "Something in account login history went wrong"})
                                        }
                                    }
                                })
                            }
                        })
                    }
                }
            })

            
            
        }
    })


}

//this is used to set the login histpry and also to check whether the account is give previleged to access the account or not

module.exports = accountLoginHistory
