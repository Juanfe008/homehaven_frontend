"use client"

import Itemlocations from "./Itemlocations";
import React, { useState, useRef, useEffect } from "react"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface Location {
  rutaImagen: string;
  altImagen: string
}

interface LocationsProps {
  locations: Location[];
}

const Locations: React.FC<LocationsProps> = ({ locations }) => {

  const [leftarrow, setleftarrow] = useState(false)
  const [rightarrow, setrightarrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if(scrollContainerRef.current){
      const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current
      setleftarrow(scrollLeft > 0)
      setrightarrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if(scrollContainer){
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if(scrollContainerRef.current){
      const containerWidth = scrollContainerRef.current.clientWidth
      const scrollAmount = direction === 'left' ? -containerWidth : containerWidth
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="relative w-full px-6 pt-24">
      <h1>Mejores destinos turisticos en Colombia</h1>

      {leftarrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform translate-y-1/2 bg-white p-2 rounded-full shadow-md z-5"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="relative w-full overflow-hidden flex space-x-6 mt-4"
      >
        {locations.map((loc, index) => (
          <Itemlocations key={index} rutaImagen={loc.rutaImagen} altImagen={loc.altImagen}></Itemlocations>
        ))}
      </div>

      {rightarrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform translate-y-1/2 bg-white p-2 rounded-full shadow-md z-5"
        >
          <FaChevronRight  />
        </button>
      )}

    </main>
  )
}

export default Locations;