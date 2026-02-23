import React, { useState, useEffect } from "react";
import slider1 from "../../assets/bnr.jpeg";
import slider2 from "../../assets/bnr.jpeg";
import slider3 from "../../assets/bnr.jpeg";
import sliderMob from "../../assets/Mobnr.jpeg";

const slides = [
  { id: 1, image: slider1 },
  { id: 2, image: slider2 },
  { id: 3, image: slider3 },
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
    <div className="relative w-full h-[420px] md:h-[420px] mt-5 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="hidden md:block w-full h-[400px] object-cover mt-2"
          />
          <img
            src={sliderMob}
            alt=""
            className="block md:hidden w-full h-96 object-cover mt-3"
          />
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current
                ? "bg-orange-500 scale-110"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;