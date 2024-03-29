const express = require('express');
const router = express.Router();
const Flat = require('../models/flatModel');
const Apartment = require('../models/apartmentModel');
const VideoApartment = require('../models/videoApartmentModel');

// Route to create a new apartment
router.post('/', async (req, res) => {
    try {
        const { apartment_name, images, flat_id } = req.body;
        console.log(req.body)

        // Validate input data (you may want to add more validation)
        if (!apartment_name || !flat_id) {
            return res.status(400).json({ message: 'Please provide apartment_name and flat_id' });
        }

        // Check if the associated flat exists
        const flat = await Flat.findById(flat_id);
        if (!flat) {
            return res.status(404).json({ message: 'Associated flat not found' });
        }

        // Create a new apartment
        const newApartment = new Apartment({ apartment_name, images, flat_id });
        const savedApartment = await newApartment.save();

        res.status(201).json(savedApartment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get all apartments
router.get('/all-apartments', async (req, res) => {
    try {
        const apartments = await Apartment.find();
        res.json(apartments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get all apartments for a specific flat
router.get('/flats/:flatId', async (req, res) => {
    try {
        const flatId = req.params.flatId;
        const apartments = await Apartment.find({ flat_id: flatId });
        res.json(apartments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get one apartment
router.get('/:apartmentId', async (req,res) => {
  try {
    const apartmentId = req.params.apartmentId;
    const apartment = await Apartment.find({_id: apartmentId});
    res.json(apartment);
  } catch (err){
    res.status(500).json({ message: err.message})
  }
})

router.delete('/', async (req, res) => {
  try {
    await Apartment.deleteMany();
    res.status(200).json({ message: 'All apartments deleted successfully' });
  } catch (error) {
    console.error('Error deleting apartments:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// get all video of an apartment

router.get('/:apartmentId/videos', async (req, res) => {
  try {
    const apartmentId = req.params.apartmentId;

    // Find all VideoApartment entries for the given apartment
    const videoApartments = await VideoApartment.find({ apartment_id: apartmentId }).populate('video_id');

    // Extract videos from VideoApartment entries
    const videos = videoApartments.map(videoApartment => videoApartment.video_id);

    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
