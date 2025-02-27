"use client"
import { useState, useEffect, useMemo, useRef } from 'react';
import { CustomValueType, motion } from 'framer-motion';

interface MasonryItem {
  [x: string]: string | number | CustomValueType | (string | number | CustomValueType | undefined)[] | [null, ...(string | number | CustomValueType | undefined)[]] | undefined;
  id: number;
  image: string;
  height: number;
}

interface MasonryProps {
  data: MasonryItem[];
}

function Masonry({ data }: MasonryProps) {
  const [columns, setColumns] = useState(2);
  const [isClient, setIsClient] = useState(false); // State to track if client-side

   // Ensure that the component only runs on the client side
   useEffect(() => {
    setIsClient(true); // Set to true only on the client side
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(5);
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(4);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(3);
      } else {
        setColumns(1); // Mobile devices
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    if (isClient) {
      handleResize(); // Only run on client side
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Specify the types of heights and gridItems
  const [heights, gridItems] = useMemo(() => {
    // eslint-disable-next-line prefer-const
    let heights: number[] = new Array(columns).fill(0); // Initialize heights array
    const gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height) - child.height; // Use full height
      return { ...child, x, y, width: width / columns, height: child.height }; // Correctly set height
    });
    return [heights, gridItems]; // Return both heights and gridItems
  }, [columns, data, width]);

  // Ensure the overall height of the masonry grid is correctly calculated
  const masonryHeight = Math.max(...heights) || 0;

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ height: masonryHeight }} // Ensure it has a proper height
    >
      {gridItems.map((item: MasonryItem) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: item.x, y: item.y, width: item.width, height: item.height }}
          animate={{ opacity: 1, x: item.x, y: item.y, width: item.width, height: item.height }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            opacity: { duration: 0.5 },
            x: { type: 'spring', stiffness: 100, damping: 25 },
            y: { type: 'spring', stiffness: 100, damping: 25 },
            height: { duration: 0.3 },
          }}
          className="absolute p-[15px] [will-change:transform,width,height,opacity]"
        >
          <div
            className="relative w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] rounded-[4px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition duration-300 ease hover:scale-110"
            style={{
              backgroundColor: '#ffffff',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default Masonry;
