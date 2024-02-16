import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Explore the 7 Lakes of San Carlos bariloche'
              label='Adventure'
              path='/services'
              price= '$800'
              location = 'Argentina'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Travel through the Islands of Los Roques in a Private Cruise'
              label='Luxury'
              path='/Products'
              price= '$1800'
              location = 'Venezuela'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Explore the Amazing Amalfi Coast'
              label='Luxury'
              path='/services'
              price= '$1250'
              location = 'Italy'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Experience The Efil Tower'
              label='Adventure'
              path='/services'
              price= '$700'
              location = 'France'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/services'
              price= '$1000'
              location = 'Dubai'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;