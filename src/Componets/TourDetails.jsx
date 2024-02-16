import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./TourDetails.css"
import Footer from "./Footer";
import Booking from './Booking.jsx';
import Common_Tours from './Common_Tours';


function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

 useEffect(() => {
   fetch('https://nodejs-production-001d.up.railway.app/tours')
     .then(response => response.json())
     .then(data => {
       const foundTour = data.find(tour => tour.id === id);
       if (foundTour) {
         setTour(foundTour);
       } else {
         setTour(null);
       }
     });
 }, [id]);

 if (!tour) {
  return <h1>Tour with id {id} not found</h1>;
}

  return (
    <>< Common_Tours/>
      <div className='tour_content'>
      <div className="image_and_booking">
        <img src={tour.src} />
        <Booking tourId={tour.id}/>
        </div>
        <div className="tour_info">
          <h2>{tour.text}</h2>
          <h6><i className="fa-solid fa-location-dot"></i> {tour.location}</h6>
          <h6><i className="fa-solid fa-tag"></i> {tour.label}</h6>
          <h6><i className="fa-solid fa-money-bill"></i> ${tour.price}</h6>
         </div>
        <div className="tour_extra_details">
          <h2>Description</h2>
          <p>{tour.description}</p>
        </div>
       </div>
      <Footer/>
    </>
  );
 }

export default TourDetails;