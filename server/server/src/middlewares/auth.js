const { validateToken } = require('../services/userServices');
const { ValidationError } = require('../utils/createValidationError');
const { errorHandler } = require('../utils/errorHandler');


module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];

    if (token) {
        try {
            const payload = validateToken(token);

            req.user = {
                email: payload.email,
                fullName: payload.fullName,
                phoneNumber: payload.phoneNumber,
                _id: payload._id,
                token
            };
        } catch (err) {
            let newErr = new ValidationError('Invalid access token. Please log in', 401);
            errorHandler(newErr, res, req)
        }
    }

    next();
};