import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApartmentDetail = () => {
  const { apartmentId } = useParams();
  const [apartment, setApartment] = useState({ images: [] }); // Initialize images as an empty array

  useEffect(() => {
    const fetchApartment = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/apartments/${apartmentId}`);
        console.log(response.data);
        setApartment(response.data[0]);
      } catch (error) {
        console.error('Error fetching apartments:', error);
      }
    };

    fetchApartment();
  }, [apartmentId]);

  console.log(apartment.images);

  return (
    <div className="apartment">
      <h1>{apartment.apartment_name}</h1>
      {apartment.images.map((image, index) => (
        <div className='m-top hotel' key={index} style={{ backgroundImage: `url(${image})`, width: '100%', height: '300px' }}></div>
      ))}
    </div>
  );
};

export default ApartmentDetail;
