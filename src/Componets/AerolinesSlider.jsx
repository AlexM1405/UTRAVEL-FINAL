import React, { useEffect, useRef, useState } from 'react';
import './AerolinesSlider.css';
import { Link } from 'react-router-dom';

 const AerolineasSlider = () => {
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
  });

window.addEventListener("resize", AerolineasSlider);
window.addEventListener("load", AerolineasSlider);

}, []);

return (
  <section className="container">
   <h2>Our Selection of Premium Airlines</h2>
   <p>Embark on a journey of unparalleled luxury with Utravel's exclusive selection of premium airlines. 
    Elevate your travel experience to new heights as we present a curated list of opulent carriers. 
    Choose Utravel for a seamless voyage, where each flight is a symphony of comfort, sophistication, and impeccable service. 
    Your ascent into luxury begins with our distinguished selection of airlines.</p>
    <div className="slider-wrapper">
      <div className="image-list" ref={imageListRef}>
      <Link to="https://www.etihad.com/en/">
      <img src="images/img-57.jpg" className="image-item"  />
      </Link>
      <Link to="https://www.emirates.com/ar/english/" >
      <img src="images/img-45.jpg" className="image-item"/>
      </Link>
      <Link to="https://www.united.com/en/gb">
      <img src="images/img-47.jpg" className="image-item"/>
      </Link>
      <Link to="https://www.airnewzealand.com/">
      <img src="images/img-59.jpg" className="image-item"/>
      </Link>
      <Link  to="https://www.turkishairlines.com/">
      <img src="images/img-56.jpg" className="image-item"/>
      </Link>
      <Link to="https://www.qatarairways.com/en-us/homepage.html">
      <img src="images/img-55.jpg" className="image-item"/>
      </Link>
      <Link to="https://www.copaair.com/es-us/">
      <img src="images/img-53.jpg" className="image-item"/>
      </Link>
      <Link to="https://www.aa.com/homePage.do">
      <img src="images/img-44.jpg" className="image-item"/>
      </Link>
      <Link to="https://www.aireuropa.com/us/es/home">
      <img src="images/img-52.jpg" className="image-item"/>
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

export default AerolineasSlider;