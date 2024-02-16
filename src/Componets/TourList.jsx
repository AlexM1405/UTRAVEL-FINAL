import { useState, useEffect } from "react";
import React from "react";
import "./TourList.css"
import CardItem from "./CardItem";
import tours from "../DATA/Tours.json";
import { Button } from "./Button";

function TourList() {
  const [filter, setFilter] = useState('');
  const [filteredTours, setFilteredTours] = useState(tours);
  const [pageCount, setPageCount ] = useState(1);
  const [page, setPage ] = useState(0);

  const toursPerPage = 22; // Set the number of tours per page

  useEffect(() => {
    const pages = Math.ceil(filteredTours.length / toursPerPage);
    setPageCount(pages);
  }, [filteredTours]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const filtered = tours.filter((tour) => {
      const lowercaseFilter = filter.toLowerCase();
      const lowercaseLocation = tour.location.toLowerCase();

      return (
        lowercaseLocation.includes(lowercaseFilter) 
      );
    });

    setFilteredTours(filtered);
  }, [filter]);

  // Slice the tours array to get the tours for the current page
  const currentTours = filteredTours.slice(page * toursPerPage, (page + 1) * toursPerPage);

  const topTwoTours = currentTours.slice(0, 2);
  const restTours = currentTours.slice(2);

  const groupedTours = restTours.reduce(
    (result, tour, index) => {
      const chunkIndex = Math.floor(index / 4);

      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }

      result[chunkIndex].push(tour);

      return result;
    },
    []
  );

  return (
    <>
      <div className='cards'>
        <p>Our Luxury Tours take you to the most exclusive and breathtaking destinations across the globe. Whether you're exploring the pristine beaches of the Maldives, wandering through the historic streets of Paris, or basking in the beauty of the Swiss Alps, each moment is designed to immerse you in the grandeur of your surroundings.</p>
        <div className='filter'>
          <input
            type='text'
            value={filter}
            onChange={handleFilterChange}
            placeholder='Filter by location'
          />
        </div>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            {/* Render the first two cards at the top */}
            <ul className='cards__items'>
              {topTwoTours.map((tour) => (
                <CardItem
                  id={tour.id}
                  src={tour.src}
                  text={tour.text}
                  label={tour.label}
                  path={tour.path}
                  price={tour.price}
                  location={tour.location}
                />
              ))}
            </ul>
            {/* Group the remaining cards into groups of 4 */}
            {groupedTours.map((tourGroup, groupIndex) => (
              <ul className='cards__items' key={groupIndex}>
                {tourGroup.map((tour) => (
                  <CardItem
                    id={tour.id}
                    src={tour.src}
                    text={tour.text}
                    label={tour.label}
                    path={tour.path}
                    price={tour.price}
                    location={tour.location}
                  />
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="pagination">
          {[...Array(pageCount).keys()].map(number => (
            <Button key={number} onClick={() => setPage(number)}
              className={page === number ? "active_page" : ""}>
              {number + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default TourList;
