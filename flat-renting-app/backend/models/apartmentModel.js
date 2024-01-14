const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
    apartment_name: { type: String, required: true },
    flat_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Flat', required: true },
    // You can add more fields as needed for your apartments
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
