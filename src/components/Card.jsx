import React from 'react';
import '../styles/card.scss';

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;


