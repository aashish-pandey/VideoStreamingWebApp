const Banner = require('../models/BannerModel')

const getBanner = async function(req, res){
    const data = await Banner.find({}).sort({updatedAt: -1})
    console.log(data[0])
    res.status(200).send({code: 200, msg: data})
}

module.exports = getBanner;