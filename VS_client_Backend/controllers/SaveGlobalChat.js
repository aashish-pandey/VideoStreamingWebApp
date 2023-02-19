const GlobalChat = require('../models/GlobalChats')

const saveGlobalChat = function(req, res){

    const chat = new GlobalChat({
        email: req.body.email,
        msg: req.body.msg
    })

    chat.save(function(err){
        if(err){
            console.log(err)
            res.status(500).send({err:true, msg:err})
        }else{
            res.status(200).send({err:false, msg: "Msg saved successfully"})
        }
    })
}

module.exports = saveGlobalChat