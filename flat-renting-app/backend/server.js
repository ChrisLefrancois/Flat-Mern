const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const flatRoutes = require('./routes/flatRoutes.js');
app.use('/flats', flatRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
