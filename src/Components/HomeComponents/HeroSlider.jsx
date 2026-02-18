import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slider1 from "../../assets/bnr.jpeg";
import slider2 from "../../assets/bnr.jpeg";
import slider3 from "../../assets/bnr.jpeg";

const slides = [
  {
    id: 1,
    image: slider1,
  },
  {
    id: 2,
    image: slider2,
  },
  {
    id: 3,
    image: slider3,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="relative w-100% h-[75vh] max-w-full ">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-fit mt-5"
          />

          {/* Dark or Light Gradient Overlay */}
          <div className="absolute inset-0 " />



        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full border transition-all duration-300 ${index === current
                ? "bg-orange-500 border-orange-500 scale-110 shadow-lg"
                : "bg-gray-300/30 dark:bg-gray-700 border-gray-500 dark:border-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider