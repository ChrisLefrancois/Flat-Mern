// FlatCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const FlatCard = ({ flat }) => {
  return (
    <div className="flat-card">
      <Link to={`/flats/${flat._id}`}>
        <div
          className="flat-image"
          style={{ backgroundImage: `url(${flat.image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",
          height:400,width:400 }}
          >
          <h2>{flat.flat_name}</h2>
          </div>
      </Link>
    </div>
  );
};

export default FlatCard;
