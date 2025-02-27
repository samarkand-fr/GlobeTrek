"use client"
import React, { useState, useEffect } from "react";

const GoUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true); // Show button after scrolling 200px
    } else {
      setIsVisible(false); // Hide button when scrolled back to the top
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        className="fixed bottom-8 right-8 p-3 bg-amber-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={scrollToTop}
        aria-label="Go to top"
      >
        ↑
      </button>
    )
  );
};

export default GoUpButton;
