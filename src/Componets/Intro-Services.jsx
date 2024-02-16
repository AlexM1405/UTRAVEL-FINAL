import React from 'react';
import "./Intro-Services.css"

function IntroServices() {
  return (
    <>
    <section className="Intro-Container">
      <div className="IntroUTRAVELLogo-Container">
        <div className="VideoBackground">
          <video autoPlay loop muted className="VideoElement">
            <source src="videos/video-4.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
      <div className="IntroUTRAVELContainer">
        <div className="IntroUTRAVEL">
          <h1>Welcome to UTRAVEL<i class="fa-solid fa-earth-europe"></i>  Your Gateway to Luxurious Adventures</h1>
          <p>Indulge in the art of travel like never before with UTRAVEL, your premier luxury travel agency. Embark on extraordinary journeys that transcend the ordinary and redefine opulence. Our mission is to craft experiences that are as unique as they are unforgettable, tailored to your discerning tastes and desires.</p>
          <h3>Discover Exclusivity</h3>
          <p>At UTRAVEL, we understand that luxury is more than just lavish accommodations and fine dining. It's about discovering destinations in ways that few have the privilege to experience. From secluded private villas in exotic locales to personalized guided tours that delve into the heart of a culture, we curate moments that go beyond the surface.</p>
          <h3>Personalized Elegance</h3>
          <p>Your journey begins long before you board a plane. Our dedicated team of travel specialists will work closely with you to understand your preferences and aspirations. Every detail, from handpicked accommodations to curated itineraries, will reflect your unique style and preferences, ensuring a seamless and luxurious experience from start to finish</p>
        </div>
      </div> 
    </section>
  </>
  )
}

export default IntroServices;