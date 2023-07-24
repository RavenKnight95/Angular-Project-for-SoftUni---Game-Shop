const Game = require('../models/Game');


async function getAll() {
    return Game.find({});
}

async function create(item) {
    const result = new Game(item);
    await result.save();

    return result;
}

function getById(id) {
    return Game.findById(id);
}

async function update(id, item) {
    const existing = await Game.findById(id);

    existing.title = item.title;
    existing.author = item.author;
    existing.genre = item.genre;
    existing.description = item.description;
    existing.price = item.price;
    existing.img = item.img;

    await existing.save();

    return existing;
}

async function deleteById(id) {
    await Game.findByIdAndDelete(id);
}


async function like(id, userId) {
    const game = await Game.findById(id);

    if (game.likes.includes(userId)) {
        throw new Error('User has already liked');
    }

    game.likes.push(userId);

    await game.save();
}

async function buy(id, userId) {
    const game = await Game.findById(id);

    if (game.boughtGameUsers.includes(userId)) {
        throw new Error('User has already purchased this game');
    }

    game.boughtGameUsers.push(userId);

    await game.save();
}


module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById,
    like,
    buy,
};