"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { travelDestinations } from "../data/travelDestinations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardsSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  // Intersection Observer for detecting when cards are visible
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cardId = parseInt(entry.target.getAttribute("data-index") || "0", 10);
          setVisibleCards(prev => new Set(prev.add(cardId)));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.8 });
    const cards = document.querySelectorAll(".destination-card");

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  // GSAP animation for scroll-triggered effects
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".destination-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4, // Shortened duration
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div id="cards-section" className="mt-12 mb-12 px-6"> {/* Added mb-12 for bottom margin */}
      {/* Travel Destinations Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {travelDestinations.map((destination, index) => (
          <div
            key={destination.id}
            data-index={index}
            className={`destination-card bg-white dark:bg-gray-600 p-6 rounded-lg shadow-lg transition-all duration-500 transform ${
              visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }} 
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src={destination.image}
                alt={destination.title}
                width={320}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{destination.title}</h2>
            <p className="text-gray-600 mb-4">{destination.description}</p>
            <Link
  href={destination.link}
  className="text-cyan-600 dark:text-cyan-300 hover:text-amber-500 dark:hover:text-amber-300 underline font-medium"
>
  Read More →
</Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;

