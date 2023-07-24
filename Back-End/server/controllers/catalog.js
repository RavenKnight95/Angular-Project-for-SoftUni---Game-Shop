const router = require('express').Router();
const api = require('../services/game');
const { isAuth, isOwner } = require('../middlewares/guards');
const mapErrors = require('../utils/mapper');
const preload = require('../middlewares/preload');



router.get('/', async (req, res) => {
    const data = await api.getAll();
    res.json(data);
});

router.post('/', isAuth(), async (req, res) => {
    const item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        img: req.body.img,
        description: req.body.description,
        price: req.body.price,
        owner: req.user._id
    };

    try {
        const result = await api.create(item);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/:id', preload(), (req, res) => {
    const item = res.locals.item;
    res.json(item);
});

router.put('/:id', preload(), isOwner(), async (req, res) => {
    const itemId = req.params.id;

    const game = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        img: req.body.img,
        description: req.body.description,
        price: Number(req.body.price),
        owner: req.user._id,
    }

    try {
        const result = await api.update(itemId, game);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.delete('/:id', preload(), isOwner(), async (req, res) => {
    try {
        const itemId = req.params.id;
        await api.deleteById(itemId);
        res.status(204).end();
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/like/:id', preload(), isAuth(), async (req, res) => {
    try {
        const itemId = req.params.id;
        const userId = req.user._id;
        await api.like(itemId, userId);
        res.status(204).end();
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }

})

router.get('/buy/:id', preload(), isAuth(), async (req, res) => {
    try {
        const itemId = req.params.id;
        const userId = req.user._id;
        await api.buy(itemId, userId);
        res.status(204).end();
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
})

module.exports = router;