import Image from "next/image"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Link from 'next/link'

interface CardProps {
  id: number
  imageSrc: string[] | string;
  imageAlt: string;
  name: string;
  price?: number;
  rating?: number;
}

const PropertiesCard = ({ id, imageSrc, imageAlt, name, price, rating }: CardProps) => {
  const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <Link href={`/location/${name}`} passHref>
      <div className="cursor-pointer group relative">
        <div className="relative overflow-hidden w-full h-80 rounded-lg">
          <Image
            fill
            src={images[currentImageIndex]}
            alt={`${imageAlt} - Image ${currentImageIndex + 1}`}
            sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
            className="object-cover transition-all duration-300 group-hover:brightness-110 h-full w-full"
          />
          {images.length > 1 && (
            <>
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-100"
                onClick={prevImage}
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-100"
                onClick={nextImage}
              >
                <FaChevronRight className="text-gray-600" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-lg font-semibold">{name}</p>
            <p className="text-white text-sm">${price} / noche</p>
            <p className="text-white text-sm">⭐ {rating}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertiesCard