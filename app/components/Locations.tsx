"use client";

import React, { useState, useRef, useEffect } from 'react';
import ItemLocations from './Itemlocations';

interface Location {
  id: number;
  imageSrc: string;
  imageAlt: string;
}

interface LocationsProps {
  locations: Location[];
}

const Locations: React.FC<LocationsProps> = ({ locations }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="w-full px-6">
      <h1>Mejores destinos turísticos en Colombia</h1>
      <div className="relative mt-4">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 text-3xl transform -translate-y-1/2 bg-gray-500 opacity-80 text-white p-2 rounded-md shadow-md z-10">
            &lang;
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {locations.map((loc) => (
            <div key={loc.id} className="flex-shrink-0 w-48">
              <ItemLocations imageSrc={loc.imageSrc} imageAlt={loc.imageAlt} />
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 text-3xl transform -translate-y-1/2 bg-gray-500 opacity-80 text-white p-2 rounded-md shadow-md z-5">
            &rang;
          </button>
        )}
      </div>
    </main>
  );
};

export default Locations;
