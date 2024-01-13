const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema({
    flat_name: { type: String, required: true },
    address: { type: String, required: true }
});

const Flat = mongoose.model('Flat', flatSchema);

module.exports = Flat;
