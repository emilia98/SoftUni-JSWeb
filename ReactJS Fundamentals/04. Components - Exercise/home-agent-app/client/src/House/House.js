import React from 'react';
import './House.css';

const House = (props) => (
  <div className="House" onMouseEnter={() => props.onHouseHover(props.id)}>
    <img src={props.image} alt={`house_${props.id}`}/>
  </div>
);

export default House;
