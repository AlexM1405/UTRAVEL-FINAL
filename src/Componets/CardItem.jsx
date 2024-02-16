import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';


function CardItem(props) {
  const { id, path, label, text, src, location, price } = props;

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={path}>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img
              className='cards__item__img'
              alt={text}
              src={src}
            />
          </figure>
          <div className='cards__item__info'>
            <h6> <i class="fa-solid fa-location-dot"></i> {location}  </h6>
            <i class='ri-map-pin-line'></i>
            <h5 className='cards__item__text'>{text}</h5>
            <h5>{price} <span> /per person</span></h5>
            <Button>
              <Link to={`/tours/${id}`}>Book Now!</Link>
            </Button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;