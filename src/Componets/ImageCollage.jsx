import React, { useEffect, useRef, useState, useCallback } from 'react';
import './ImageCollage.css';

function ImageCollage() {
  const images = [
    { src: 'images/pexels-alleksana-4186326.jpg' },
    { src: 'images/pexels-michael-block-3225531.jpg' },
    { src: 'images/pexels-tommy-milanese-7891883.jpg' },
    { src: 'images/pexels-eko-agalarov-15713593.jpg' },
    { src: 'images/pexels-wewe-yang-4508644.jpg' },
    { src: 'images/pexels-zakaria-boumliha-2827374.jpg' },
    { src: 'images/pexels-diego-f-parra-3663924.jpg' },
    { src: 'images/pexels-victor-5899725.jpg' },
    { src: 'images/pexels-tirachard-kumtanom-887828.jpg' },
    { src: 'images/pexels-sander-dalhuisen-2566030.jpg' },
    { src: 'images/pexels-wendy-wei-1656681.jpg' },
    { src: 'images/pexels-asad-photo-maldives-3155726.jpg' },
    { src: 'images/pexels-anna-holodna-13812183.jpg' },
    { src: 'images/pexels-asad-photo-maldives-1268855.jpg' },
    { src: 'images/pexels-osama-i̇brahim-9187088.jpg' },
    { src: 'images/pexels-sander-dalhuisen-2566030.jpg' },
    { src: 'images/pexels-trace-hudson-2535206.jpg' },
    { src: 'images/pexels-taryn-elliott-3889764.jpg' },
    { src: 'images/pexels-taryn-elliott-3889843.jpg' },
    { src: 'images/pexels-rachel-claire-4825719.jpg' },
    { src: 'images/pexels-thanhhoa-tran-1488327.jpg' },
    { src: 'images/pexels-quark-studio-2506988.jpg' },
    { src: 'images/pexels-pixabay-261102.jpg' },
    { src: 'images/pexels-colon-freld-2373201.jpg' }
  ];

    const [loadedImages, setLoadedImages] = useState([]);
    const [toLoadCount, setToLoadCount] = useState(15); // Number of images to load initially
  
    const observer = useRef();
  
    const lastImageElementRef = useCallback(node => {
      if (observer.current && node === null) {
        observer.current.disconnect();
      } else if (node !== null) {
        observer.current = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              observer.current.unobserve(img);
            }
          });
        });
        observer.current.observe(node);
      }
    }, []);
  
    useEffect(() => {
      // Initial load of images
      setLoadedImages(images.slice(0, toLoadCount));
  
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.offsetHeight;
        if (windowHeight + scrollTop >= docHeight) {
          // Load more images when near the bottom of the page
          setLoadedImages(prevLoadedImages => [...prevLoadedImages, ...images.slice(prevLoadedImages.length, prevLoadedImages.length + toLoadCount)]);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [toLoadCount, images]);
  
    return (
      <div className='Container-collage'>
        <h1>Get inspiration for your next trip</h1>
        <p>Explore a world of possibilities as we curate enticing travel experiences tailored just for you. From exotic destinations to hidden gems, let Utravel spark the inspiration that transforms your travel dreams into extraordinary journeys. The world is waiting, and your next adventure begins with us.</p>
        <div className="image-collage">
          {loadedImages.map((image, index) => (
            <img
              key={index}
              ref={lastImageElementRef}
              data-src={image.src}
              alt=""
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default ImageCollage