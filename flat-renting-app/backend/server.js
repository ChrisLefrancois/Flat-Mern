const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const flatRoutes = require('./routes/flatRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/flats', flatRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/flatRentingDB', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Your routes and middleware will be added here

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
