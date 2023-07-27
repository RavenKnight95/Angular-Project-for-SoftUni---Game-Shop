const { model, Schema, Types: { ObjectId } } = require('mongoose');

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new Schema({
    email: { type: String, required: true, validate: {
        validator(value) {
            return emailPattern.test(value);
        },
        message: 'Must have valid email'
    } },
    hashedPassword: { type: String, minlength: [3, 'Password must be at least 3 charaters long'] },
    myGames: { type: [ObjectId], ref: 'Game', default: [] }
});


userSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const User = model('User', userSchema);

module.exports = User;