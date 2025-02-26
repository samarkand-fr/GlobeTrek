import BlogPostList from '../../components/BlogPostList';

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
        Exploring the World, One Journey at a Time
      </h2>
      <p className="text-lg text-center text-gray-600 mb-10 dark:text-gray-300">
        GlobeTrek represents the spirit of adventure—the desire to explore, discover, and connect with cultures around the world. 
      </p>
      <BlogPostList />
    </div>
  );
};

export default Blog;





// import Link from 'next/link';
// import BlogPostList from '../../components/BlogPostList';
// import Image from 'next/image'; // Import the Next.js Image component

// const Blog = () => {
//   return (
//     <div className="container mx-auto p-6">
//       {/* Blog Header Section */}
//       <header className="text-center mb-12">
//         <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Travel Blog</h2>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//           Welcome to my travel blog! Here, you'll find stories, tips, and inspiration for your future adventures.
//           Join me as I explore the world and share my experiences. Whether you're looking for travel guides or
//           personal stories, there's something here for every wanderlust soul!
//         </p>
//         <div className="flex justify-center space-x-6 mb-8">
//           {/* Search Bar */}
//           <input
//             type="text"
//             placeholder="Search posts..."
//             className="p-3 border-2 border-gray-300 rounded-full w-full max-w-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
//           />
//         </div>
//         {/* Categories / Filters */}
//         <div className="flex justify-center space-x-6 mb-8">
//           <button className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm text-gray-800 font-semibold hover:bg-gray-200 transition duration-300">
//             All Categories
//           </button>
//           <button className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm text-gray-800 font-semibold hover:bg-gray-200 transition duration-300">
//             Europe
//           </button>
//           <button className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm text-gray-800 font-semibold hover:bg-gray-200 transition duration-300">
//             Asia
//           </button>
//         </div>
//       </header>

//       {/* Blog Posts List Section */}
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//         {/* Each Blog Post Card */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
//           <Image
//             src="/path-to-image.jpg"  // Replace with actual image path
//             alt="Blog Post Image"
//             width={500}  // Set the width of the image
//             height={300} // Set the height of the image
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-6">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">Blog Post Title</h3>
//             <p className="text-gray-600 text-sm mb-4">A short excerpt or description of the blog post. A few sentences to give the reader an idea of what the post is about.</p>
//             <Link href="/blog/slug" className="text-amber-500 hover:underline font-semibold">
//               Read More
//             </Link>
//           </div>
//         </div>

//         {/* Repeat above card for other blog posts */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
//           <Image
//             src="/path-to-image.jpg"  // Replace with actual image path
//             alt="Blog Post Image"
//             width={500}  // Set the width of the image
//             height={300} // Set the height of the image
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-6">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">Blog Post Title</h3>
//             <p className="text-gray-600 text-sm mb-4">A short excerpt or description of the blog post. A few sentences to give the reader an idea of what the post is about.</p>
//             <Link href="/blog/slug" className="text-amber-500 hover:underline font-semibold">
//               Read More
//             </Link>
//           </div>
//         </div>

//         {/* More Blog Post Cards as needed */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
//           <Image
//             src="/path-to-image.jpg"  // Replace with actual image path
//             alt="Blog Post Image"
//             width={500}  // Set the width of the image
//             height={300} // Set the height of the image
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-6">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">Blog Post Title</h3>
//             <p className="text-gray-600 text-sm mb-4">A short excerpt or description of the blog post. A few sentences to give the reader an idea of what the post is about.</p>
//             <Link href="/blog/slug" className="text-amber-500 hover:underline font-semibold">
//               Read More
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Footer / CTA */}
//       <footer className="mt-16 text-center py-6 bg-gray-100">
//         <p className="text-gray-600 text-lg font-semibold">
//           Thanks for visiting my blog! Don't forget to subscribe for the latest updates and join my travel community.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Blog;
