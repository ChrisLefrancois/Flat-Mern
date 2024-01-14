const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const db = require('./db');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.get('/images/:public_id', (req, res) => {
  const public_id = req.params.public_id;

  // Generate a secure URL for serving the image
  const imageUrl = cloudinary.url(public_id);

  res.json({ imageUrl });
});

const flatRoutes = require('./routes/flatRoutes.js');
app.use('/flats', flatRoutes);

const appartmentRoutes = require("./routes/apartmentRoutes.js")
app.use('/apartment', appartmentRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
