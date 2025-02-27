"use client"
import { useState } from "react";
import Image from "next/image";
import FallingText from "../../components/FallingText";

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submitting form

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true); // Set submitting to true while processing
    alert(`Subscribed with email: ${email}`);
    setEmail(""); // Reset email input
    setShowForm(false); // Hide form after submission
    setIsSubmitting(false); // Reset submitting state
  };

  return (
    <div className="container mx-auto p-4">
      {/* Falling Text Effect */}
      <div className="w-full h-[200px] flex justify-center items-center overflow-hidden mb-10">
        <FallingText
          text={`Welcome to my travel blog! Here, I share my personal experiences, travel guides, stunning photography, and recommendations to help you explore the world.`}
          highlightWords={["travel", "blog", "experiences", "photography", "explore"]}
          trigger="auto"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.6}
          fontSize="1.8rem"
          mouseConstraintStiffness={0.9}
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Embracing the Journey, One Destination at a Time
      </h1>

      {/* Intro Paragraph */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
        Whether you&apos;re looking for travel tips, hidden gems, or inspiration for your next adventure, you&apos;re in the right place!
      </p>

      {/* My Journey */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Story Behind GlobeTrek</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          My passion for travel started at a young age, driven by a curiosity to explore the unknown. 
          From the bustling streets of Tokyo to the ancient wonders of Egypt, each journey is a new chapter filled with adventure and discovery.
        </p>
      </section>

      {/* What to Expect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What GlobeTrek Offers</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300">
          <li>🌍 Travel Guides: Best places to visit, eat, and stay.</li>
          <li>📸 Travel Photography: Capturing moments that tell a story.</li>
          <li>📝 Personal Experiences: Insights, challenges, and lessons learned.</li>
          <li>🏝️ Recommendations: Must-visit locations and hidden gems.</li>
        </ul>
      </section>

      {/* Images */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Capturing Moments Across the Globe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["paris.jpeg", "tokyo.jpg", "rome.jpg"].map((image, index) => (
            <div key={index} className="w-full h-64 relative">
              <Image
                src={`/images/${image}`}
                alt={image.replace(".jpeg", "").replace(".jpg", "")}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mb-12 text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Join Me in Exploring the World 🌍
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Travel is more than just visiting places—it&apos;s about embracing new cultures, meeting incredible people, and creating unforgettable memories. 
          Follow my journey and get exclusive tips, stories, and travel inspiration straight to your inbox! 🚀
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-cyan-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition"
        >
          Subscribe for Updates
        </button>

        {showForm && (
          <div className="mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 w-full md:w-80 text-lg border rounded-md mt-2"
              aria-label="Enter your email"
            />
            <button
              onClick={handleSubscribe}
              disabled={isSubmitting} // Disable button while submitting
              className={`mt-4 px-6 py-2 ${isSubmitting ? 'bg-gray-400' : 'bg-green-600'} text-white font-semibold rounded-lg shadow-md hover:${isSubmitting ? '' : 'bg-green-700'} transition`}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
