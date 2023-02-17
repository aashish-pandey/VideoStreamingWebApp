const MovieUpload = require('../models/MovieUpload')

const getMovies = async function(req, res){


    const data = await MovieUpload.find({}).sort({updatedAt: -1})
    res.status(200).send({code: 200, msg: data})
}

module.exports = getMovies;