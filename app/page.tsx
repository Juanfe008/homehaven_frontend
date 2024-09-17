"use client"; 

import { FaHome, FaBed, FaBuilding, FaRegBuilding, FaTree, FaUmbrellaBeach, FaShip, FaLaughBeam, FaCampground, FaTractor, FaWater, FaMountain, FaSun, FaSkiing, FaWineGlassAlt, FaPaintBrush, FaHotel, FaWarehouse, FaThemeisle, FaHotTub } from 'react-icons/fa';
import Categories from "./components/Categories";
import Filter from "./components/Filter";
import Locations from "./components/Locations.tsx";
import Properties from "./components/Properties.tsx";

const locations = [
  { id: 1, imageSrc: "/images/cali.jpeg", imageAlt: "CALI" },
  { id: 2, imageSrc: "/images/medellin.jpg", imageAlt: "MEDELLÍN" },
  { id: 3, imageSrc: "/images/popayan.jpeg", imageAlt: "POPAYÁN" },
  { id: 4, imageSrc: "/images/cartagena.jpeg", imageAlt: "CARTAGENA" },
  { id: 5, imageSrc: "/images/bogota.jpeg", imageAlt: "BOGOTÁ" },
  { id: 6, imageSrc: "/images/ipiales.jpeg", imageAlt: "IPIALES" }
];

const categories = [
  { id: 1, name: "Casas", icon: FaHome },
  { id: 2, name: "Habitaciones", icon: FaBed },
  { id: 3, name: "Apartamentos", icon: FaBuilding },
  { id: 4, name: "Cabañas", icon: FaWarehouse }, 
  { id: 5, name: "Frente a la playa", icon: FaUmbrellaBeach },
  { id: 6, name: "Casas del árbol", icon: FaTree }, 
  { id: 7, name: "Mansiones", icon: FaHotel },
  { id: 8, name: "Castillos", icon: FaRegBuilding }, 
  { id: 9, name: "Barcos", icon: FaShip },
  { id: 10, name: "Diversión", icon: FaLaughBeam },
  { id: 11, name: "Glamping", icon: FaCampground },
  { id: 12, name: "Granjas", icon: FaTractor },
  { id: 13, name: "Islas", icon: FaThemeisle },
  { id: 14, name: "Casas flotantes", icon: FaWater }, 
  { id: 15, name: "Cuevas", icon: FaMountain },
  { id: 16, name: "Desierto", icon: FaSun },
  { id: 17, name: "Ski-in/out", icon: FaSkiing },
  { id: 18, name: "Parques nacionales", icon: FaTree },
  { id: 19, name: "Viñedos", icon: FaWineGlassAlt },
  { id: 20, name: "Diseño", icon: FaPaintBrush },
];

export default function Home() {
  const handleFilter = (filter: string) => {
    console.log("Filtering with:", filter);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Filter onFilter={handleFilter} />
      <Categories categories={categories} />
      <Locations locations={locations}/>
      <Properties/>
    </main>
  );
}