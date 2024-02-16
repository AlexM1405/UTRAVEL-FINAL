import React from 'react';
import CardItem from './CardItem';
import tours from'../DATA/Tours.json';


function CardList() {
  return (
    <ul className='cards__items'>
      {tours.map((tour) => (
        <CardItem
          id={tour.id}
          src={tour.src}
          text={tour.text}
          label={tour.label}
          price={tour.price}
          location={tour.location}
        />
      ))}
    </ul>
  );
}

export default CardList;