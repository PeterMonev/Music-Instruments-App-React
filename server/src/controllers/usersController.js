const userServices = require('../services/userServices');
const { errorHandler } = require('../utils/errorHandler');
const preload = require('../middlewares/preload');

const router = require('express').Router();

router.post('/register', async (req, res) => {
    const { email,fullName,phoneNumber, password } = req.body;

    try {
        const result = await userServices.register(email,fullName,phoneNumber, password);
        res.status(201).json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userServices.login(email, password);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.get('/logout', (req, res) => {
  
    userServices.logout(req.user.token);
    res.status(204).end();
});

router.get('/:id', async (req, res) =>{
 
    try {
        res.status(200).json(await userServices.getUserById(req.params.id));

    } catch (err) {
        errorHandler(err, res, req);
    }
});


module.exports = router;
