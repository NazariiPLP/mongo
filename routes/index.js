const { Router } = require('express');
const saladRouter = require('./salad');
const ingredientsRouter = require('./ingredients');

const router = Router();

// http://localhost:5001/salads
router.use('/salads', saladRouter);
// http://localhost:5001/ingredients
router.use('/ingredients', ingredientsRouter);

module.exports = router;