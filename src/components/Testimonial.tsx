import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../data/testimonials";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const contentRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  // Intersection Observer for detecting visibility
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardId = parseInt(entry.target.getAttribute("data-index") || "0", 10);
          setVisibleCards((prev) => new Set(prev.add(cardId)));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    const cards = document.querySelectorAll(".testimonial-card");

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // GSAP Animation for testimonials
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".testimonial-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
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
    <section
      ref={contentRef}
      className="w-full py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center min-h-screen"
    >
      <h2 className="text-4xl font-bold text-center">🌍 What Readers Are Saying</h2>
      <p className="mt-4 text-lg text-center max-w-3xl">
        Our blog readers share how our travel stories have inspired and guided their own journeys.
      </p>

      {/* Testimonials Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            data-index={index}
            className={`testimonial-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 transform ${
              visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <p className="text-gray-700 dark:text-gray-300 text-xl italic mb-4">
              &ldquo;{testimonial.feedback}&rdquo;
            </p>
            <div className="flex items-center mt-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full shadow-md"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div
        className="mt-10 px-6 py-3 border-2  rounded-full text-lg font-semibold  bg-cyan-600 hover:bg-gray-900 hover:text-white dark:hover:bg-white transition-all"
      >
        <Link href="/blog" className="w-full h-full flex items-center justify-center text-white ">
          Read More Stories & Plan Your Next Adventure
        </Link>
      </div>
    </section>
  );
};

export default Testimonial;
