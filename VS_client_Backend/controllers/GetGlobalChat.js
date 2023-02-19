const GlobalChat = require('../models/GlobalChats')

const getGlobalChat = async function(req, res){
    const data = await GlobalChat.find({})

    res.status(200).send({err:false, msg: data})
}

module.exports = getGlobalChat