import React, { useState, useEffect } from 'react';

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
            <ul>
                {flats.map(flat => (
                    <li key={flat._id}>
                        <strong>{flat.flat_name}</strong> - {flat.address}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlatList;
