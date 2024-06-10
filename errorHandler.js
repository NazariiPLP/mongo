const { Error: { ValidationError } } = require('moongose');

module.exports.errorHandler = async (err, req, res, next) => {
    console.log(err);
    
    if(err instanceof ValidationError) {
        return res.status(400).send(err.message);
    }

    if(err instanceof CastError) {
        return res.status(400).send('Invalid ObjectId');
    }

    return res.statud(500).send('Unknown error');
}