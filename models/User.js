const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {type: 'string', required: true, unique: true},
        email: {type: 'string', required: true, unique: true},
        image: {type: 'string', default: ""},
        password: {type: 'string', required: true},
        isAdmin: {type: 'boolean', default: false}
    }, {timestamps: true}
)

module.exports = mongoose.model('User', UserSchema)