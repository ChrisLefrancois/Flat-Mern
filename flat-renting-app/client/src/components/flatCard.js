import React from 'react';
import { Link } from 'react-router-dom';


const FlatCard = ({ flat }) => {
  return (

    <div className="hotel" style={{ backgroundImage: `url(${flat.image})`}}>
      <Link to={`/flats/${flat._id}`}>
        <h2>{flat.flat_name}</h2>
      </Link>
    </div>

  );
};

export default FlatCard;
