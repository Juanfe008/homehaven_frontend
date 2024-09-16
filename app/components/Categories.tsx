"use client";
import React, { useState, useRef, useEffect } from 'react';
import { IconType } from 'react-icons';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Category {
  id: number;
  name: string;
  icon: IconType;
}

interface CategoriesProps {
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
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
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full">
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-11 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-5"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide space-x-8 py-4 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center flex-shrink-0">
            <button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <category.icon className="text-2xl text-gray-700" />
            </button>
            <span className="mt-2 text-xs font-medium text-gray-700">{category.name}</span>
          </div>
        ))}
      </div>
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-11 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-5"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default Categories;