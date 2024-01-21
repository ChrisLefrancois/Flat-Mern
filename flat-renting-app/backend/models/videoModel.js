const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: {type: String, required: true},
});

const Vodeo = mongoose.model('Video', videoSchema);

module.exports = Video;
