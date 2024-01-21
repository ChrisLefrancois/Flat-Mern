const mongoose = require('mongoose');

const videoApartmentSchema = new mongoose.Schema({
  video_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true },
  apartment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Apartment', required: true },
});

const videoApartment = mongoose.model('videoApartment', videoApartmentSchema);

module.exports = videoApartment;
