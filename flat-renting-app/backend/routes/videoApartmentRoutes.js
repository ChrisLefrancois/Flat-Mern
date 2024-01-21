const express = require('express');
const router = express.Router();
const Apartment = require('../models/apartmentModel');
const Video = require('../models/videoModel');
const VideoApartment = require('../models/videoApartmentModel');


router.get('/', async (req, res) => {
  try {
      const videoApartments = await VideoApartment.find();
      res.json(videoApartments);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
      const { video_id, apartment_id } = req.body;
      console.log(req.body)

      // Validate input data (you may want to add more validation)
      if (!video_id || !apartment_id) {
          return res.status(400).json({ message: 'Please provide all the required fields' });
      }

      // Create a new flat
      const newVideoApartment = new VideoApartment({ video_id, apartment_id });
      const savedVideoApartment = await newVideoApartment.save();

      res.status(201).json(savedVideoApartment);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

module.exports = router;
