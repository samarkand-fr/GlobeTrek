Welcome to My Travel Blog! This project is an interactive travel blog built with Next.js, Tailwind CSS, TypeScript, GSAP animations, and custom animated effects for an immersive user experience. The blog showcases articles about various travel destinations with images and details about each location.

The project integrates Grid Motion and Flowing Menu effects, powered by GSAP, to create a visually dynamic and smooth browsing experience.

Features
Dynamic Blog: Built with Next.js to manage blog pages and posts.
Interactive Animations: Visual effects like Grid Motion and Flowing Menu using GSAP for smooth animations and transitions.
Responsive Design: Fully responsive design, adapting seamlessly to different screen sizes.
TypeScript: The code is written in TypeScript for better type safety and maintainability.
Tailwind CSS: Uses Tailwind CSS for flexible and modern styling.
GSAP Animations: High-performance animations with GSAP to enhance interactivity.
Installation
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/travel-blog-gallery.git
2. Install dependencies
Navigate into the project directory and install the required dependencies:

bash
Copy
Edit
cd travel-blog-gallery
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
The app will be available at http://localhost:3000 in your browser.

Folder Structure
/components: Contains all reusable React components like the Masonry gallery.
/data: Stores static data for the gallery and blog posts.
/pages: Contains the application's main pages like the blog and gallery.
/styles: Custom Tailwind CSS configuration and utility classes.
Customization
1. Add your own gallery images
To add new images to the gallery, simply update the galleryData.ts file in the /data folder. Add new objects with id, image, and height properties to the array.
2. Add new blog posts
New blog posts can be added by creating new Markdown files or extending the /data/blogData.ts (depending on your data structure). Ensure you add the required title, content, and date.
Known Issues
Mobile Performance: The Masonry layout is optimized for larger screens, but mobile devices may experience performance issues with many high-resolution images.
Contributing
We welcome contributions! If you'd like to improve the app or add new features, feel free to fork the repository and submit a pull request. You can also open issues to suggest new features or report bugs.

License
This project is licensed under the MIT License.

