const { Error: { ValidationError } } = require('moongose');

module.exports.errorHandler = async (err, req, res, next) => {
    if(err instanceof ValidationError) {
        return res.status(400).send(err.message);
    }


    return res.statud(500).send('Unknown error');
}