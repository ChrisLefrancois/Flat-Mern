const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
    apartment_name: { type: String, required: true },
    images: [{type: String}],
    flat_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Flat', required: true },
    videos: { type: mongoose.Schema.Types.ObjectId, ref: 'Video'}
    // You can add more fields as needed for your apartments
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
