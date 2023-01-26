const path = require('path')



module.exports = function(req, res){
// console.log("request received")
// res.json({
//     name:"AP"
// })
    userEmail = req.cookies['userEmail']
    

    if(userEmail){
        res.sendFile(path.join(__dirname , '..','pages','Home2.html'))
    }
    
    
    res.sendFile(path.join(__dirname , '..','pages','Home.html'))


}