const { errorHandler } = require('../utils/errorHandler')
const { ValidationError } = require('../utils/createValidationError')

module.exports = (api, idName = 'id') => async (req, res, next) => {
    const id = req.params[idName];

    try {
        const item = await api.getById(id);
        if (item) {
            res.locals.item = item;
            next();
        } else {
            throw new ValidationError(`Item ${id} not found.`, 404);
        }
    } catch (err) {
        errorHandler(err, res, req);
    }
};