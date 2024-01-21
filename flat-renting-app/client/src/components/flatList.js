import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import FlatCard from './flatCard.js';


const FlatList = () => {
    const [flats, setFlats] = useState([]);

    useEffect(() => {
        const fetchFlats = async () => {
            try {
                const response = await fetch('http://localhost:3001/flats');
                const data = await response.json();
                setFlats(data);
            } catch (error) {
                console.error('Error fetching flats:', error);
            }
        };

        fetchFlats();
    }, []); // The empty dependency array ensures the effect runs only once on component mount

    return (
      <div>
          <h2>Flat List</h2>
          <div className="flats-list">
      {flats.map((flat) => (
        <FlatCard key={flat._id} flat={flat} />
      ))}
    </div>
      </div>
  );
};

export default FlatList;
