const { Salad } = require('../models/index');

module.exports.createSalad = async (req, res, next) => {
    try {
        const { body } = req;

        const salad = await Salad.create(body);

        return res.status(201).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllSalads = async (req, res, next) => {
    try {
        const allSalads = await Salad.find({});

        return res.status(200).send(allSalads);
    } catch (error) {
        next(error);
    }
};

module.exports.getSalad = async (req, res, next) => {
    try {
        const { params: { saladId } } = req;

        const salad = await Salad.findById(saladId);

        if(!salad) {
            return res.status(400).send('There is no salad');
        }

        return res.status(200).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.updateSalad = async () => {};

module.exports.deleteSalad = async() => {};
