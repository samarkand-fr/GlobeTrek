
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContentSection = () => {
  const contentRef = useRef<HTMLElement | null>(null); // Declare the ref for the section

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 }, // Starting state (opacity 0 and 50px down)
      {
        opacity: 1, // Target opacity
        y: 0, // Target y position (slide to the top)
        scrollTrigger: {
          trigger: el, // Element that triggers the animation
          start: "top 80%", // Start animation when 80% of the element is visible in the viewport
          end: "bottom 20%", // End animation when the element's bottom reaches 20% of the viewport
          scrub: true, // Makes the animation linked to scroll position
          markers: false, // Optional: Add for debugging scroll trigger markers
        },
      }
    );
  }, []);

  return (
    <section
      ref={contentRef} // Attach ref to the section
      className="w-full py-20 px-6 bg-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold">🌍 What Travelers Say</h2>
      <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Testimonial content */}
      <div className="mt-10">
        <p>&ldquo;This was an unforgettable journey! Highly recommend!&ldquo;</p>
        <p>- Traveler 1</p>
      </div>

      {/* Call to Action */}
      <button className="mt-10 px-6 py-3 border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all">
        Start Exploring
      </button>
    </section>
  );
};

export default ContentSection;
