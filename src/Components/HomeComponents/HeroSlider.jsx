import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import sliderMob from "../../assets/HeroImages/mobile2.jpeg";
import { slides } from "../../../data/Hero";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <div
      className="relative w-full h-[420px] mt-5 overflow-hidden group"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          onClick={() => navigate(slide.link)}
          className={`absolute inset-0 cursor-pointer transition-all duration-1000 ease-in-out ${index === current
              ? "opacity-100 scale-100 z-20"
              : "opacity-0 scale-105 z-10"
            }`}
        >
          <img
            src={slide.image}
            alt="slider"
            className="hidden md:block w-full h-[420px] object-cover mt-3"
          />
          <img
            src={slide.mobileImg}
            alt="slider mobile"
            className="block md:hidden w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0"></div>
<div className="absolute bottom-3 md:bottom-5 left-5 md:left-10 z-30">
  <button
    onClick={() => navigate(slide.link)}
    className="px-5 py-2 md:px-6 md:py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm md:text-base"
  >
    Register Now
  </button>
</div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                ? "bg-orange-500 scale-125"
                : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;