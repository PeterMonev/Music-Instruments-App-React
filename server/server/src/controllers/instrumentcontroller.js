const router = require('express').Router();

const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const instrumentServices = require('../services/intrumentServices');
const commentServices = require('../services/commentServices');
const { errorHandler } = require('../utils/errorHandler');


router.get('/', async (req, res) => {
    try {
        res.status(200).json(await instrumentServices.getAll(req.query));
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(200).json({ users: [], count: 0 });
        }
        errorHandler(err, res, req)
    }
});

router.post('/', isAuth(), async (req, res) => {
    const item = {
        title: req.body.title,
        category: req.body.category,
        address: req.body.address,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        year: req.body.year,
        description: req.body.description,
        owner: req.user._id
    };

    try {
        const result = await instrumentServices.create(item);
        res.status(200).json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.get('/:id', preload(instrumentServices), (req, res) => {
    try {
        res.json(res.locals.item);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.put('/:id', preload(instrumentServices), isOwner(), async (req, res) => {
    try {
        const result = await instrumentServices.updateById(res.locals.item, req.body);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.delete('/:id', preload(instrumentServices), isAuth(), isOwner(), async (req, res) => {
    const id = req.params.id;

    try {
        const result = await instrumentServices.deleteById(id);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.get('/:id/comments', preload(instrumentServices), async (req, res) => {
    try {
        const result = await commentServices.getAllByInstrumentId(req.params.id);

        res.json(result);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.post('/:id/comments', preload(instrumentServices), isAuth(), async (req, res) => {
    const data = {
        text: req.body.text,
        owner: req.user._id,
        instrument: req.params.id
    }

    try {
        const result = await commentServices.create(data);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.put('/comments/:commentId',
    preload(commentServices, 'commentId'),
    isAuth(),
    isOwner(),
    async (req, res) => {
    try {
        const result = await commentServices.updateById(res.locals.item, req.body);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.delete('/comments/:commentId',
    preload(commentServices, 'commentId'),
    isAuth(),
    isOwner(),
    async (req, res) => {
    try {
        const result = await commentServices.deleteById(req.params.commentId);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.get('/:instrumentId/comments/:commentId',
    preload(instrumentServices, 'instrumentId'),
    preload(commentServices, 'commentId'),
    isAuth(),
    isOwner(),
    async (req, res) => {
    try {
        res.json(res.locals.item);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

module.exports = router;
