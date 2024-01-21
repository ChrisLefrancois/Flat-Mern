import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const FlatDetail = () => {
    const { flatId } = useParams();
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/apartments/flats/${flatId}`);
                console.log(response.data)
                setApartments(response.data);
            } catch (error) {
                console.error('Error fetching apartments:', error);
            }
        };

        fetchApartments();
    }, [flatId]);

    return (
        <div>
            <h2>Apartment List for Flat {flatId.flat_name}</h2>
            <ul>
                {apartments.map(apartment => (
                  <Link to={`/apartments/${apartment._id}`}>
                    <li key={apartment._id}>
                        <strong>{apartment.apartment_name}</strong>
                    </li>
                  </Link>
                ))}
            </ul>
        </div>
    );
};

export default FlatDetail;
