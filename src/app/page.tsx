
'use client'; 
import { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import CardsSection from '../components/CardsSection';
import Testimonial from '@/components/Testimonial';

const Home = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection onScroll={handleScroll} />

      {/* Cards Section */}
      <div ref={cardsRef}>
        <CardsSection />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
