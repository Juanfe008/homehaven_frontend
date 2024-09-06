"use client"; 

import Image from "next/image";
import { FaHome, FaBed, FaBuilding } from 'react-icons/fa';
import Categories from "./components/Categories";
import Filter from "./components/Filter";
import Locations from "./componentes/Locations.tsx";

const categories = [
  { id: 1, name: "Casas rurales", icon: FaHome },
  { id: 2, name: "Habitaciones", icon: FaBed },
  { id: 3, name: "Apartamentos", icon: FaBuilding },
  { id: 4, name: "Cabañas", icon: FaHome },
  { id: 5, name: "Frente a la playa", icon: FaBed },
  { id: 6, name: "Casas del arbol", icon: FaBuilding },
  { id: 7, name: "Mansiones", icon: FaHome },
  { id: 8, name: "castillos", icon: FaBed },
  { id: 9, name: "barcos", icon: FaBuilding },
  { id: 10, name: "diversión", icon: FaBuilding },
  { id: 11, name: "Casas rurales", icon: FaHome },
  { id: 12, name: "Habitaciones", icon: FaBed },
  { id: 13, name: "Apartamentos", icon: FaBuilding },
  { id: 14, name: "Cabañas", icon: FaHome },
  { id: 15, name: "Frente a la playa", icon: FaBed },
  { id: 16, name: "Casas del arbol", icon: FaBuilding },
  { id: 17, name: "Mansiones", icon: FaHome },
  { id: 18, name: "castillos", icon: FaBed },
  { id: 19, name: "barcos", icon: FaBuilding },
  { id: 20, name: "diversión", icon: FaBuilding },
];


export default function Home() {
  const handleFilter = (filter: string) => {
    console.log("Filtering with:", filter);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Navbar</h1>
      </div>
      <Filter onFilter={handleFilter} />
      <Categories categories={categories} />
      <Locations/>
    </main>
  );
}