const { Schema, model } = require('mongoose');

const Client = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    id: {
        type: String,
        unique: true,
        required: true
    }

});

module.exports = model('Client', Client);