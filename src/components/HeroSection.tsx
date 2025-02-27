"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PixelTransition from "./PixelTransition";

const HeroSection = ({ onScroll }: { onScroll: () => void }) => {
  const imageArray = [
    { src: "/images/travel.jpg", text: "Travel" },
    { src: "/images/paris.jpeg", text: "Paris" },
    { src: "/images/rome.jpg", text: "Rome" },
    { src: "/images/barcelone.jpeg", text: "Barcelona" },
    { src: "/images/tokyo.jpg", text: "Tokyo" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const handleHover = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/travel.jpg')" }}
      />

      {/* Pixel Transition Section */}
      <div
        className="relative z-20 w-full h-[50vh] min-h-[300px] flex justify-center items-center px-4"
        onMouseEnter={handleHover}
      >
        <PixelTransition
          firstContent={
            <div className="relative w-full h-full">
              <Image
                src={imageArray[currentImageIndex].src}
                alt={imageArray[currentImageIndex].text}
                width={600} // Adjust width for responsiveness
                height={400} // Adjust height for responsiveness
                className="w-full h-full object-cover"
              />
            </div>
          }
          secondContent={
            <div className="w-full h-full flex justify-center items-center bg-black">
              <p className="text-white font-extrabold text-2xl md:text-4xl text-center">
                {imageArray[currentImageIndex].text}
              </p>
            </div>
          }
          gridSize={windowWidth < 768 ? 12 : 24} // Responsive pixel grid size
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="w-full h-full"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 mt-10 text-center px-4">
        <h1 className="text-white font-bold text-3xl md:text-6xl tracking-wide">
          Explore the World
        </h1>
      </div>

      {/* Call to Action Button */}
      <div className="absolute bottom-12 w-full text-center z-20">
        <button
          onClick={onScroll}
          className="text-white font-bold text-lg border-2 border-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
