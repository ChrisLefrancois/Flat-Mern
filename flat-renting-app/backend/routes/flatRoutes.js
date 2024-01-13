const express = require('express');
const router = express.Router();
const Flat = require('../models/flatModel');

// Route to get all flats
router.get('/', async (req, res) => {
    try {
        const flats = await Flat.find();
        res.json(flats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
  try {
      const { flat_name, address } = req.body;
      console.log(req.body)

      // Validate input data (you may want to add more validation)
      if (!flat_name || !address) {
          return res.status(400).json({ message: 'Please provide flat_name and address' });
      }

      // Create a new flat
      const newFlat = new Flat({ flat_name, address });
      const savedFlat = await newFlat.save();

      res.status(201).json(savedFlat);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

module.exports = router;
