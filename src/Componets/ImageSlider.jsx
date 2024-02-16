import React, { useEffect, useRef, useState } from 'react';
import './ImageSlider.css';
import { Link } from 'react-router-dom';

 const initSlider = () => {
  const imageListRef = useRef(null);
  const sliderScrollbarRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
 
  useEffect(() => {
    const imageList = imageListRef.current;
    const sliderScrollbar = sliderScrollbarRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }
      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  
  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

}, []);

 return (
   <section className="container">
    <h2>Our Selection of Premium Hotels & Resorts</h2>
    <p>Indulge in unparalleled luxury with Utravel's curated selection of exquisite hotels. 
      Elevate your stay to new heights as we present you with a collection of opulent accommodations tailored to exceed your expectations.
      Choose Utravel for an extraordinary escape where each hotel is a destination in itself.
      Your journey into luxury begins here</p>
    
     <div className="slider-wrapper">
       <div className="image-list" ref={imageListRef}>
       <Link to="https://www.palaceresorts.com/">
       <img src="images/img-33.jpg" className="image-item"  />
       </Link>
       <Link to="https://www.hardrockhotels.com/all-inclusive-resorts.aspx" >
       <img src="images/Img-32.jpg" className="image-item"/>
       </Link>
       <Link to="https://www.hilton.com/en/brands/hilton-hotels/">
       <img src="images/img-34.jpg" className="image-item"/>
       </Link>
       <Link to="https://www.chevalblanc.com/en/">
       <img src="images/img-35.jpg" className="image-item"/>
       </Link>
       <Link to="https://www.fourseasons.com/">
       <img src="images/img-36.jpg" className="image-item"/>
       </Link>
       <Link to="https://www.bulgarihotels.com/">
       <img src="images/img-37.jpg" className="image-item"/>
       </Link>
       <Link  to="https://www.comohotels.com/">
       <img src="images/img-38.jpg" className="image-item"/>
       </Link>
       <Link to="https://www.hyatt.com/en-US/hotel/france/hotel-martinez/jcagh">
       <img src="images/img-39.jpg" className="image-item"/>
       </Link>
       <Link to="https://www.lagonissiresort.gr/">
       <img src="images/img-41.jpg" className="image-item"/>
       </Link>
       </div>
       <div className="slider-scrollbar" ref={sliderScrollbarRef}>
         <div className="scrollbar-track">
           <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
         </div>
       </div>
     </div>
   </section>
 );
 }

export default initSlider;