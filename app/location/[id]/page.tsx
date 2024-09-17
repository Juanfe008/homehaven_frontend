"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FaStar, FaHeart, FaShare, FaBed, FaBath, FaWifi, FaParking, FaSwimmingPool } from 'react-icons/fa';

export default function LocationPage() {
  const params = useParams();
  const id = params.id;

  const property = {
    title: "" + id,
    rating: 4.9,
    reviews: 120,
    location: "Ciudad " + id + ", Colombia",
    host: "Juan Pérez",
    beds: 3,
    baths: 2,
    guests: 6,
    price: 150,
    description: "Esta hermosa propiedad ofrece una experiencia única con vistas impresionantes y todas las comodidades que necesitas para una estancia inolvidable.",
    amenities: ["WiFi", "Estacionamiento", "Piscina"],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="font-semibold">{property.rating}</span>
          <span className="mx-1">·</span>
          <span className="underline">{property.reviews} reseñas</span>
          <span className="mx-1">·</span>
          <span>{property.location}</span>
        </div>
        <div className="flex items-center">
          <button className="mr-4 flex items-center"><FaShare className="mr-1" /> Compartir</button>
          <button className="flex items-center"><FaHeart className="mr-1" /> Guardar</button>
        </div>
      </div>

      <div className="mb-8"> 
        <Image /*src={`/images/${id}.jpeg`}*/ src={`/images/cali.jpeg`} alt={property.title} width={1000} height={500} className="rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Alojamiento entero - Anfitrión: {property.host}</h2>
          <div className="flex mb-4">
            <span className="mr-4"><FaBed className="inline mr-1" /> {property.beds} camas</span>
            <span className="mr-4"><FaBath className="inline mr-1" /> {property.baths} baños</span>
            <span><FaHeart className="inline mr-1" /> {property.guests} huéspedes</span>
          </div>
          <p className="mb-4">{property.description}</p>
          <h3 className="text-xl font-semibold mb-2">Lo que ofrece este lugar</h3>
          <ul className="grid grid-cols-2 gap-2">
            {property.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center">
                {amenity === "WiFi" && <FaWifi className="mr-2" />}
                {amenity === "Estacionamiento" && <FaParking className="mr-2" />}
                {amenity === "Piscina" && <FaSwimmingPool className="mr-2" />}
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="border rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">${property.price} <span className="text-base font-normal">noche</span></h3>
            <button className="w-full bg-tipoyellow text-white py-3 rounded-lg font-semibold mb-4">Reservar</button>
            <p className="text-center text-sm text-gray-500">No se te cobrará nada aún</p>
          </div>
        </div>
      </div>
    </div>
  );
}