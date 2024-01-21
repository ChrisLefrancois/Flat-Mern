const express = require('express');
const router = express.Router();
const Video = require('../models/videoModel');

// Route to get all Videos
router.get('/', async (req, res) => {
  try {
      const videos = await Video.find();
      res.json(videos);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
      const { url, title, description } = req.body;
      console.log(req.body)

      // Validate input data (you may want to add more validation)
      if (!url || !title || !description) {
          return res.status(400).json({ message: 'Please provide all the required fields' });
      }

      // Create a new flat
      const newVideo = new Video({ url, title, description });
      const savedVideo = await newVideo.save();

      res.status(201).json(savedVideo);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

module.exports = router;
