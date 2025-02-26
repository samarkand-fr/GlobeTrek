// import React from 'react';
// import Masonry from '../../components/Masonry'; // Adjust the path based on where the Masonry component is located
// import {data} from "../../data/galleryData";

// const Gallery: React.FC = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
//         Photo Gallery
//       </h1>
//       <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
//         Explore stunning photos from around the world. Each picture tells a unique story.
//       </p>
//       <Masonry data={data} />
//     </div>
//   );
// };

// export default Gallery;
import React from "react";
import Masonry from "../../components/Masonry"; // Adjust the path if needed
import { data } from "../../data/galleryData";

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
        Capturing the World 🌍
      </h1>

      {/* Introductory Paragraph */}
      <p className="text-xl text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
        Every picture holds a story, a memory, and a moment frozen in time. 
        Dive into this collection of breathtaking snapshots from different corners of the world. 
        Let the colors, landscapes, and emotions inspire your next adventure! 📸✨
      </p>

      {/* Masonry Grid */}
      <Masonry data={data} />

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Have amazing travel photos to share? Let’s connect and inspire each other! 🌎💙
        </p>
        <button className="px-6 py-3 bg-amber-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-amber-600 transition">
          Submit Your Photos
        </button>
      </div>
    </div>
  );
};

export default Gallery;
