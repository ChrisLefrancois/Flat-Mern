import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApartmentDetail = () => {
  const { apartmentId } = useParams();
  const [apartment, setApartment] = useState([])

  useEffect(() => {
    const fetchApartment = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/apartments/${apartmentId}`);
            console.log(response.data)
            setApartment(response.data[0]);
        } catch (error) {
            console.error('Error fetching apartments:', error);
        }
    };

    fetchApartment();
}, [apartmentId]);

  return (
    <div className="apartment">
      <h1>{apartment.apartment_name}</h1>
    </div>
  );
};

export default ApartmentDetail;
