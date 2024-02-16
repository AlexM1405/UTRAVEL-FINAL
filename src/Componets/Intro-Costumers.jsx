import React from 'react';
import "./Intro-Costumers.css"
import { Link } from 'react-router-dom';
import CustomerForm from "./CustomerForm.jsx"
function IntroCostumers() {
 return (
      <div className="Costumers_Container">
      <div className="container_Recomendation">
          <div className="Recomendations">
              <div className="Recomendations_Logo">
                 <i class="fa-solid fa-money-check-dollar fa-bounce"></i>
              </div>
              <h3>Best Price Guarantee</h3>
              <p>
                 Ensures you not only experience the epitome of luxury but also enjoy the most competitive rates in the world of extravagant travel.
                 where luxury meets the best price.
              </p>
          </div>
          <div className="Recomendations">
              <div className="Recomendations_Logo">
                 <i class="fa-solid fa-credit-card fa-bounce"></i>
              </div>
              <h3>Easy & Quick Booking</h3>
              <p>Ensures that your journey into opulence begins effortlessly. 
                 Elevate your travel, where luxury meets convenience.
              </p>
          </div>
          <div className="Recomendations">
              <div className="Recomendations_Logo">
                 <i class="fa-solid fa-user-shield fa-bounce"></i>
              </div>
              <h3>Customer Care 24/7</h3>
              <p> Ensuring your every luxury travel need is met around the clock. 
                 Elevate your experience with continuous support, where exceptional service knows no borders.
              </p>
          </div>
      </div>
      <div className="container_Costumer-video">
          <div className="Costumer-text-container">
              <h2>Experience Luxury Travel Like Never Before!</h2>
              <p>Choose Utravel for a journey where your experience is our top priority. 
                 We go beyond destinations, creating unforgettable moments tailored to your desires.
                 From the first inquiry to the final farewell, our seamless, personalized service transforms your travel dreams into a bespoke reality.
                 With a commitment to excellence and a philosophy centered on customer experience, our dedicated team ensures every aspect of your journey exceeds expectations. 
                 At Utravel, it's not just about reaching your destination; 
                 it's about savoring the entire expedition.
                 Join our Utravel family and embark on this extraordinary journey together
              </p>
              <Link to="/Services">
              <h1>UTRAVEL<i class="fa-solid fa-earth-europe"></i></h1>
              </Link>
          </div>
          <div className="Costumer-video-container">
              <video autoPlay loop muted className="VideoElement">
                 <source src="videos/pexels-taryn-elliott-6073575 (2160p).mp4" type="video/mp4" />
              </video>
          </div>
      </div>
      <h1>Rate Our Costumer Experience</h1>
      <CustomerForm/>
  </div>
 );
}

export default IntroCostumers;