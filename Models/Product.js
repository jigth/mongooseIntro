const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        unique: true,  // Avoid duplicate product names (only works if there weren't duplicates in that
                       // collection previously. i.e: This prevents but does NOT remove duplicates).
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    }
});

module.exports = model('Product', productSchema);