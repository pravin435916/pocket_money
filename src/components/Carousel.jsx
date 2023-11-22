// src/Carousel.js
import React, { useState, useEffect } from "react";

const Carousel = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, interval, items]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-64 md:h-80 lg:h-96 p-4"
          >
            {/* Your slide content goes here */}
            <img className="" src={item.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
