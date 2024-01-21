const mongoose = require('mongoose');

const videoApartmentSchema = new mongoose.Schema({
  video_id: { type: String, required: true },
  apartment_id: {type: String, required: true},
});

const videoApartment = mongoose.model('videoApartment', videoApartmentSchema);

module.exports = Flat;
