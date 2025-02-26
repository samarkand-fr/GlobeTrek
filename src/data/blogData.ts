
import { BlogPost } from '../types';  // Import BlogPost type

export const blogPosts: BlogPost[] = [
  {
  id: 'paris',
  title: 'Exploring the Streets of Paris',
  description: 'Discover the beauty and charm of Paris, the City of Light.',
  image: '/images/paris.jpeg',
  content: [
    { type: 'paragraph', text: 'Paris is one of the most beautiful cities in the world. Known for its elegance and romantic charm, it has been a muse for countless artists, writers, and dreamers.' },
    { type: 'image', src: '/images/eiffel.webp', alt: 'Eiffel Tower', width: 800, height: 500 },
    { type: 'paragraph', text: 'From the iconic Eiffel Tower to the charming streets of Montmartre, there’s always something new to discover around every corner.' },
    { type: 'heading', text: 'The Montmartre District' },
    { type: 'paragraph', text: 'Montmartre is a bohemian neighborhood that transports you to another era, filled with narrow winding streets, vibrant cafes, and art studios. It’s the perfect place to wander aimlessly, soaking in the atmosphere.' },
    { type: 'image', src: '/images/montmartre.jpg', alt: 'Montmartre Street', width: 800, height: 533 },
    { type: 'paragraph', text: 'The district is also home to the famous Sacré-Cœur Basilica, which offers a stunning panoramic view of the city from its hilltop location.' },
    { type: 'heading', text: 'The Louvre Museum' },
    { type: 'paragraph', text: 'No visit to Paris is complete without exploring the Louvre Museum, one of the largest and most renowned art museums in the world. It houses thousands of works of art, including the legendary Mona Lisa.' },
    { type: 'image', src: '/images/louvre.jpg', alt: 'Louvre Museum', width: 800, height: 533 },
    { type: 'paragraph', text: 'The museum’s glass pyramid entrance, designed by architect I. M. Pei, is an iconic symbol of the Louvre and offers a striking contrast to the classical architecture of the surrounding buildings.' },
    { type: 'heading', text: 'Cafes and Pastries' },
    { type: 'paragraph', text: 'Paris is famous for its café culture, and you’ll find countless charming cafés perfect for enjoying a coffee or pastry. Try a traditional croissant or a macaron, and don’t forget to savor the atmosphere of Parisian life.' },
    { type: 'image', src: '/images/cafe-paris.webp', alt: 'Parisian Café', width: 800, height: 533 },
    { type: 'paragraph', text: 'A café in Paris is not just about the food, it’s about the experience – people-watching, sipping espresso, and enjoying the leisurely pace of life.' },
    { type: 'heading', text: 'The Seine River' },
    { type: 'paragraph', text: 'The Seine River runs through the heart of Paris, and a boat cruise along the river offers one of the best views of the city’s landmarks. You can admire the Eiffel Tower, Notre-Dame, and the Louvre from the water.' },
    { type: 'image', src: '/images/seine-river-in-paris.webp', alt: 'Seine River', width: 800, height: 500 }
  ]
,
    latestRead: [
      {
        id: 'japan', 
        title: 'A Journey Through Japan',
        description: 'Dive into the culture and beauty of Japan.',
        image: '/images/tokyo.jpg',
        content: [
          { type: 'paragraph', text: 'Japan is a fascinating destination blending tradition and modernity...' }
        ],
        latestRead: []
      },
      {
        id: 'spain', 
        title: 'Vibrant Life in Barcelona',
        description: 'Discover the charms of Barcelona, between culture and beaches.',
        image: '/images/barcelone.jpeg',
        content: [
          { type: 'paragraph', text: 'Barcelona, with its unique architecture and relaxed atmosphere, is a must-visit place in Spain.' }
        ],
        latestRead: []
      }
    ]
  },
  {
    id: 'spain',
  title: 'Vibrant Life in Barcelona',
  description: 'Discover the charms of Barcelona, between culture and beaches.',
  image: '/images/barcelone.jpeg',
  content: [
    { type: 'paragraph', text: 'Barcelona, with its unique architecture and relaxed atmosphere, is a must-visit place in Spain. The city is a vibrant blend of rich history, modernist architecture, and beautiful beaches.' },
    { type: 'image', src: '/images/sagrada.jpg', alt: 'Sagrada Familia', width: 800, height: 500 },
    { type: 'paragraph', text: 'One of the most iconic landmarks in Barcelona is the Sagrada Familia, an awe-inspiring basilica designed by architect Antoni Gaudí. Its intricate facades and towering spires are a testament to Gaudí’s genius and vision.' },
    { type: 'heading', text: 'The Gothic Quarter' },
    { type: 'paragraph', text: 'The Gothic Quarter (Barri Gòtic) is the historic heart of Barcelona. Its maze of narrow streets is filled with medieval buildings, charming squares, and hidden gems. It’s the perfect place to wander and explore the city’s rich past.' },
    { type: 'image', src: '/images/gothic-quarter.webp', alt: 'Gothic Quarter', width: 800, height: 533 },
    { type: 'paragraph', text: 'Here, you’ll find the stunning Barcelona Cathedral, the ancient Roman walls, and the lively Plaça del Rei, which holds centuries of history.' },
    { type: 'heading', text: 'La Rambla and Mercado de La Boqueria' },
    { type: 'paragraph', text: 'La Rambla is one of Barcelona’s most famous streets, a bustling boulevard lined with shops, restaurants, and street performers. At the heart of La Rambla is the Mercado de La Boqueria, a vibrant market where you can taste local delicacies, fresh produce, and tapas.' },
    { type: 'image', src: '/images/la-rambla.jpg', alt: 'La Rambla', width: 800, height: 533 },
    { type: 'paragraph', text: 'The market is a sensory overload, with the vibrant colors and smells of fresh fruit, seafood, and cured meats filling the air.' },
    { type: 'heading', text: 'The Beaches of Barcelona' },
    { type: 'paragraph', text: 'Barcelona’s beaches offer a refreshing escape from the bustling city. With the Mediterranean Sea just steps away, you can relax, sunbathe, or take part in water sports while enjoying the stunning coastal views.' },
    { type: 'image', src: '/images/barcelona-beach.webp', alt: 'Barcelona Beach', width: 800, height: 533 },
    { type: 'paragraph', text: 'The Barceloneta Beach is one of the most popular, where locals and tourists alike gather to enjoy the sand and sea.' },
    { type: 'heading', text: 'Park Güell' },
    { type: 'paragraph', text: 'Park Güell, another masterpiece by Gaudí, is a colorful and whimsical public park filled with unique sculptures, mosaics, and architectural wonders. The park offers breathtaking views of the city and is a perfect spot for a leisurely stroll.' },
    { type: 'image', src: '/images/park-guell.avif', alt: 'Park Güell', width: 800, height: 533 },
    { type: 'paragraph', text: 'The vibrant colors and organic shapes of the park’s design make it one of the most iconic sites in Barcelona.' },
    { type: 'heading', text: 'The Magic Fountain of Montjuïc' },
    { type: 'paragraph', text: 'The Magic Fountain of Montjuïc is a captivating sight, especially at night. This fountain offers a light and water show, combining colorful lights, music, and water jets in a spectacular performance.' },
    { type: 'image', src: '/images/montjuic.jpg', alt: 'Magic Fountain of Montjuïc', width: 800, height: 500 }
  ],
    latestRead: [
      {
        id: 'paris', 
        title: 'Exploring the Streets of Paris',
        description: 'Discover the beauty and charm of Paris, the City of Light.',
        image: '/images/paris.jpeg',
        content: [
          { type: 'paragraph', text: 'Paris is one of the most beautiful cities in the world, known for its elegance and romantic charm.' }
        ],
        latestRead: []
      },
      {
        id: 'rome', 
        title: 'Wonders of Rome',
        description: 'Discover the wonders of Rome, the capital of history.',
        image: '/images/rome.jpeg',
        content: [
          { type: 'paragraph', text: 'Rome is a city where history comes alive on every street corner.' }
        ],
        latestRead: []
      }
    ]
  },
  {
      id: 'rome',
      title: 'Wonders of Rome',
      description: 'Discover the wonders of Rome, the capital of history.',
      image: '/images/rome.jpeg',
      content: [
        { type: 'paragraph', text: 'Rome is a city where history comes alive on every street corner. From its ancient ruins and iconic landmarks to its vibrant streets and piazzas, Rome is a city steeped in centuries of history and culture.' },
        { type: 'image', src: '/images/colosseum.jpg', alt: 'Colosseum', width: 800, height: 500 },
        { type: 'paragraph', text: 'At the heart of Rome lies the Colosseum, an ancient amphitheater that once hosted gladiatorial contests and public spectacles. Today, it stands as one of the most visited and recognized landmarks in the world.' },
        { type: 'heading', text: 'The Colosseum' },
        { type: 'paragraph', text: 'The Colosseum is a marvel of ancient engineering, capable of holding up to 80,000 spectators. Built between 70 and 80 AD, it hosted a variety of events, from gladiator battles to animal hunts and mock sea battles.' },
        { type: 'image', src: '/images/colosseum-interior.jpg', alt: 'Interior of the Colosseum', width: 800, height: 533 },
        { type: 'paragraph', text: 'Today, visitors can walk through its grand arches and imagine the intense spectacles that once took place here. It’s a symbol of the Roman Empire’s grandeur and a testament to its architectural genius.' },
        { type: 'heading', text: 'The Roman Forum' },
        { type: 'paragraph', text: 'The Roman Forum, once the heart of political, social, and religious life in Ancient Rome, is now a sprawling ruin, filled with the remnants of temples, basilicas, and triumphal arches.' },
        { type: 'image', src: '/images/roman-forum.jpg', alt: 'Roman Forum', width: 800, height: 533 },
        { type: 'paragraph', text: 'Strolling through the Forum, visitors can explore the ruins of the Senate House, the Temple of Saturn, and the Arch of Titus, all while learning about the fascinating history of the Roman Republic and Empire.' },
        { type: 'heading', text: 'The Pantheon' },
        { type: 'paragraph', text: 'The Pantheon, one of the best-preserved monuments of Ancient Rome, is a marvel of Roman architecture. Built as a temple to all gods, its massive dome is still the world’s largest unreinforced concrete dome.' },
        { type: 'image', src: '/images/pantheon.webp', alt: 'Pantheon', width: 800, height: 533 },
        { type: 'paragraph', text: 'The Pantheon’s oculus, a circular opening in the center of the dome, allows natural light to flood the interior, creating a divine atmosphere. Today, it serves as a church and a symbol of Rome’s architectural ingenuity.' },
        { type: 'heading', text: 'St. Peter’s Basilica and the Vatican' },
        { type: 'paragraph', text: 'No visit to Rome is complete without a trip to Vatican City, the world’s smallest independent state. At its heart lies St. Peter’s Basilica, a breathtaking church designed by Michelangelo, Raphael, and other Renaissance masters.' },
        { type: 'image', src: '/images/st-peters-basilica.jpg', alt: 'St. Peter\'s Basilica', width: 800, height: 533 },
        { type: 'paragraph', text: 'The Vatican Museums, home to one of the world’s most impressive art collections, including the Sistine Chapel with Michelangelo’s iconic ceiling, are also located here, making Vatican City an unmissable part of any trip to Rome.' },
        { type: 'heading', text: 'The Trevi Fountain' },
        { type: 'paragraph', text: 'The Trevi Fountain is one of the most famous fountains in the world. Located in the heart of Rome, this Baroque masterpiece is famous for its grandeur and the tradition of tossing a coin into the water to ensure a return to Rome.' },
        { type: 'image', src: '/images/trevi-fountain.webp', alt: 'Trevi Fountain', width: 800, height: 533 },
        { type: 'paragraph', text: 'The fountain, designed by Nicola Salvi and completed in 1762, features a dramatic depiction of Neptune, the god of the sea, riding a chariot pulled by two horses. It’s a symbol of Rome’s Baroque beauty and charm.' },
        { type: 'heading', text: 'Piazza Navona' },
        { type: 'paragraph', text: 'Piazza Navona is one of Rome’s most beautiful squares, built on the site of an ancient stadium. It is renowned for its stunning Baroque architecture, fountains, and vibrant atmosphere.' },
        { type: 'image', src: '/images/piazza-navona.jpg', alt: 'Piazza Navona', width: 800, height: 533 },
        { type: 'paragraph', text: 'The square is home to three magnificent fountains, including the famous Fountain of the Four Rivers by Gian Lorenzo Bernini, which represents the four major rivers of the world as seen by the Romans.' },
        { type: 'heading', text: 'The Spanish Steps' },
        { type: 'paragraph', text: 'The Spanish Steps, a monumental staircase of 135 steps, is a popular gathering place for both locals and visitors. Leading from the Piazza di Spagna to the Trinità dei Monti church, it’s an iconic part of Rome’s historic center.' },
        { type: 'image', src: '/images/spanish-steps.jpeg', alt: 'Spanish Steps', width: 800, height: 533 },
        { type: 'paragraph', text: 'The steps are a popular spot for people-watching, and from the top, you can enjoy stunning views of the city, making it a perfect place to relax and take in the atmosphere of Rome.' },
        { type: 'heading', text: 'Modern Rome' },
        { type: 'paragraph', text: 'While Rome is famous for its ancient sites, it is also a vibrant modern city, known for its fashion, dining, and contemporary art scenes. From stylish boutiques to trendy cafes, there is something for everyone in this lively city.' },
        { type: 'image', src: '/images/modern-rome.webp', alt: 'Modern Rome', width: 800, height: 533 },
        { type: 'paragraph', text: 'Rome offers a perfect blend of the old and the new, where centuries of history coexist with the energy of a modern European capital. Whether you’re enjoying a coffee in a charming piazza or exploring the latest art exhibition, Rome’s modern side is as captivating as its ancient history.' }
      ]
    ,
    latestRead: [
      {
        id: 'spain', 
        title: 'Vibrant Life in Barcelona',
        description: 'Discover the charms of Barcelona, between culture and beaches.',
        image: '/images/barcelone.jpg',
        content: [
          { type: 'paragraph', text: 'Barcelona is a sunny and vibrant city, blending architecture and modernity.' }
        ],
        latestRead: []
      },
      {
        id: 'cairo', 
        title: 'The Mysteries of Cairo',
        description: 'Explore the secrets of Cairo and the pyramids of Egypt.',
        image: '/images/cairo.jpeg',
        content: [
          { type: 'paragraph', text: 'Cairo, a fascinating mix of history and modernity in the heart of Egypt.' }
        ],
        latestRead: []
      }
    ]
  },
  {
      id: 'cairo',
      title: 'The Mysteries of Cairo',
      description: 'Explore the secrets of Cairo and the pyramids of Egypt.',
      image: '/images/cairo.jpeg',
      content: [
        { type: 'paragraph', text: 'Cairo is a fascinating city that blends ancient history with modern culture. It is a place where the wonders of the ancient world meet the hustle and bustle of a vibrant, contemporary city.' },
        { type: 'image', src: '/images/pyramids.avif', alt: 'Pyramids of Giza', width: 800, height: 500 },
        { type: 'paragraph', text: 'One of Cairo’s most iconic features is the Giza Plateau, home to the world-renowned Pyramids of Giza. These ancient structures, built as tombs for pharaohs, have stood the test of time and continue to awe visitors from around the world.' },
        { type: 'heading', text: 'The Pyramids of Giza' },
        { type: 'paragraph', text: 'The Pyramids of Giza, including the Great Pyramid of Khufu, are among the most famous ancient monuments in the world. These massive structures, built over 4,000 years ago, remain one of the Seven Wonders of the Ancient World.' },
        { type: 'image', src: '/images/great-pyramid.jpg', alt: 'Great Pyramid of Giza', width: 800, height: 533 },
        { type: 'paragraph', text: 'The Great Pyramid, originally built as a tomb for the Pharaoh Khufu, is the largest of the pyramids and was the tallest man-made structure in the world for over 3,800 years.' },
        { type: 'heading', text: 'The Sphinx' },
        { type: 'paragraph', text: 'Standing guard at the entrance to the Giza Plateau is the Great Sphinx, a colossal limestone statue with the body of a lion and the head of a pharaoh. It is an iconic symbol of ancient Egypt and has fascinated historians for centuries.' },
        { type: 'image', src: '/images/sphinx.webp', alt: 'The Sphinx', width: 800, height: 533 },
        { type: 'paragraph', text: 'The Sphinx is believed to represent the Pharaoh Khafre, and its purpose was likely to protect the pyramids and the pharaoh’s tomb.' },
        { type: 'heading', text: 'The Egyptian Museum' },
        { type: 'paragraph', text: 'In the heart of Cairo, the Egyptian Museum houses one of the world’s most impressive collections of ancient Egyptian artifacts. From mummies and jewelry to the treasures of Tutankhamun, the museum offers a window into Egypt’s fascinating past.' },
        { type: 'image', src: '/images/egyptian-museum.jpg', alt: 'Egyptian Museum', width: 800, height: 533 },
        { type: 'paragraph', text: 'The museum’s most famous exhibit is the collection of treasures from the tomb of King Tutankhamun, which includes his famous gold mask and other precious items.' },
        { type: 'heading', text: 'Cairo’s Islamic Cairo District' },
        { type: 'paragraph', text: 'Cairo’s Islamic Cairo district is a UNESCO World Heritage site filled with stunning Islamic architecture, including ancient mosques, palaces, and forts. This area offers a glimpse into the city’s medieval past.' },
        { type: 'image', src: '/images/islamic-cairo.jpeg', alt: 'Islamic Cairo', width: 800, height: 533 },
        { type: 'paragraph', text: 'The famous Mosque of Muhammad Ali, located in the Citadel, offers panoramic views of Cairo and is one of the most recognized landmarks in the city.' },
        { type: 'heading', text: 'Cairo’s Vibrant Markets' },
        { type: 'paragraph', text: 'Cairo is home to some of the most vibrant markets in the world, where you can find anything from spices and textiles to souvenirs and antiques. The Khan El Khalili market is one of the oldest and most famous bazaars in the city.' },
        { type: 'image', src: '/images/khan-el-khalili.avif', alt: 'Khan El Khalili Market', width: 800, height: 533 },
        { type: 'paragraph', text: 'In Khan El Khalili, visitors can wander through narrow streets lined with shops selling traditional crafts, jewelry, and souvenirs, while enjoying the lively atmosphere and aromas of spices and street food.' },
        { type: 'heading', text: 'The Nile River' },
        { type: 'paragraph', text: 'The Nile River, the lifeblood of Egypt, flows through Cairo and offers a serene escape from the chaos of the city. A boat cruise along the Nile is one of the best ways to see Cairo’s landmarks from a different perspective.' },
        { type: 'image', src: '/images/nile-cruise.jpg', alt: 'Nile River Cruise', width: 800, height: 533 },
        { type: 'paragraph', text: 'The view of Cairo’s skyline along the river, especially at sunset, is simply breathtaking, and many visitors opt for a dinner cruise to enjoy the beauty of the Nile in the evening.' },
        { type: 'heading', text: 'Modern Cairo' },
        { type: 'paragraph', text: 'While Cairo is steeped in ancient history, it is also a bustling modern city with a vibrant cultural scene. From contemporary art galleries to lively cafes, Cairo offers a mix of old-world charm and modern energy.' },
        { type: 'image', src: '/images/modern-cairo.jpg', alt: 'Modern Cairo', width: 800, height: 533 },
        { type: 'paragraph', text: 'Cairo’s modern architecture, shopping districts, and nightlife provide visitors with a diverse range of experiences, blending Egypt’s ancient legacy with the excitement of contemporary urban life.' }
      ]
    ,
    latestRead: [
      {
        id: 'rome', 
        title: 'Wonders of Rome',
        description: 'Discover the wonders of Rome, the capital of history.',
        image: '/images/rome.jpeg',
        content: [
          { type: 'paragraph', text: 'Rome, where history and culture meet in a majestic setting.' }
        ],
        latestRead: []
      },
      {
        id: 'paris', 
        title: 'Exploring the Streets of Paris',
        description: 'Discover the beauty and charm of Paris, the City of Light.',
        image: '/images/paris.jpeg',
        content: [
          { type: 'paragraph', text: 'Paris, between art, culture, and gastronomy, an unmissable city.' }
        ],
        latestRead: []
      }
    ]
  },
  {
    id: 'japan',
    title: 'A Journey Through Japan',
    description: 'Dive into the culture and beauty of Japan.',
    image: '/images/tokyo.jpg',
    content: [
      { type: 'paragraph', text: 'Japan is a fascinating destination blending tradition and modernity. From serene temples and historic shrines to futuristic skyscrapers and high-tech gadgets, Japan offers a unique contrast of old and new.' },
      { type: 'image', src: '/images/tokyo.jpg', alt: 'Tokyo', width: 800, height: 500 },
      { type: 'paragraph', text: 'The bustling capital city, Tokyo, is an epicenter of technology, fashion, and culture, while cities like Kyoto and Nara provide a glimpse into Japan’s rich historical past with ancient temples and peaceful gardens.' },
      { type: 'heading', text: 'Tokyo: The Heart of Modern Japan' },
      { type: 'paragraph', text: 'Tokyo is a sprawling metropolis that never sleeps. With its neon-lit streets, diverse districts, and futuristic technology, it’s easy to see why Tokyo is considered one of the most exciting cities in the world.' },
      { type: 'image', src: '/images/shibuya-crossing.jpg', alt: 'Shibuya Crossing', width: 800, height: 533 },
      { type: 'paragraph', text: 'One of Tokyo’s most iconic landmarks is the Shibuya Crossing, often considered the world’s busiest pedestrian crossing. Here, you can watch hundreds of people crossing at the same time in a mesmerizing dance of human movement.' },
      { type: 'heading', text: 'Kyoto: The Cultural Heart of Japan' },
      { type: 'paragraph', text: 'Kyoto, once the imperial capital of Japan, is home to stunning temples, beautiful traditional gardens, and the famous Fushimi Inari Shrine. This city is where you can experience the more traditional side of Japan.' },
      { type: 'image', src: '/images/kyoto-temple.webp', alt: 'Kyoto Temple', width: 800, height: 533 },
      { type: 'paragraph', text: 'Kyoto is known for its peaceful ambiance, and places like the Arashiyama Bamboo Grove and the Golden Pavilion offer a serene experience, making Kyoto a must-visit destination for any traveler.' },
      { type: 'heading', text: 'Mount Fuji: Japan’s Iconic Landmark' },
      { type: 'paragraph', text: 'Mount Fuji is Japan’s tallest and most famous mountain. Its symmetrical, snow-capped peak is often depicted in art and photography and symbolizes the beauty of Japan’s natural landscape.' },
      { type: 'image', src: '/images/mount-fuji.jpeg', alt: 'Mount Fuji', width: 800, height: 533 },
      { type: 'paragraph', text: 'Hiking to the top of Mount Fuji is a challenging but rewarding experience, and it provides a stunning panoramic view of the surrounding lakes and countryside.' },
      { type: 'heading', text: 'The Cherry Blossom Season' },
      { type: 'paragraph', text: 'Japan’s cherry blossom season, or sakura, is a breathtaking sight. Every spring, cherry trees bloom across the country, covering parks and streets in delicate pink petals. It’s a time for celebration, picnics, and festivals.' },
      { type: 'image', src: '/images/sakura.jpg', alt: 'Cherry Blossom', width: 800, height: 533 },
      { type: 'paragraph', text: 'Many people travel to Japan specifically to witness the sakura season, which holds cultural significance, symbolizing the transient beauty of life.' },
      { type: 'heading', text: 'Traditional Japanese Cuisine' },
      { type: 'paragraph', text: 'Japanese cuisine is known for its delicate flavors, fresh ingredients, and beautiful presentation. From sushi and sashimi to ramen and tempura, each dish is a work of art.' },
      { type: 'image', src: '/images/sushi.webp', alt: 'Sushi', width: 800, height: 533 },
      { type: 'paragraph', text: 'Sushi is perhaps the most well-known Japanese dish, but the country’s food culture is incredibly diverse, with regional specialties that are just as delicious.' },
      { type: 'heading', text: 'The Tranquility of Japanese Gardens' },
      { type: 'paragraph', text: 'Japan’s traditional gardens are designed to promote tranquility and reflection. These gardens, found in temples and palaces, are carefully planned to create harmonious environments where visitors can find peace and solitude.' },
      { type: 'image', src: '/images/japanese-garden.webp', alt: 'Japanese Garden', width: 800, height: 533 },
      { type: 'paragraph', text: 'The Zen gardens, with their meticulously raked sand and strategically placed rocks, are designed to encourage meditation and inner peace.' }
    ]
  ,
    latestRead: [
      {
        id: 'paris', 
        title: 'Exploring the Streets of Paris',
        description: 'Discover the beauty and charm of Paris, the City of Light.',
        image: '/images/paris.jpeg',
        content: [
          { type: 'paragraph', text: 'Paris is an unmissable destination, between art and history.' }
        ],
        latestRead: []
      },
      {
        id: 'rome', 
        title: 'Wonders of Rome',
        description: 'Discover the wonders of Rome, the capital of history.',
        image: '/images/rome.jpeg',
        content: [
          { type: 'paragraph', text: 'Rome is a city that takes you through the ages, an open-air museum.' }
        ],
        latestRead: []
      }
    ]
  }
];

export default blogPosts;
