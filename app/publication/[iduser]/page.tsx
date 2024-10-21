"use client";

import { useParams } from "next/navigation";
import CustomButton from "@/app/components/forms/CustomButton";

export default function PublicationPage() {
  const params = useParams();
  const id = params.iduser;

  const aldeano = {
    name: "" + id
  }

  return (
    <div className="m-8 p-8 border border-black bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Hola {aldeano.name}, pon tu anuncio nuevo</h1>

      {/* Select */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="select">
          Selecciona el tipo de alojamiento
        </label>
        <select
          id="select"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value=""></option>
          <option value="opcion1">Departamento</option>
          <option value="opcion2">Casa</option>
          <option value="opcion3">Alojamientos unicos</option>

        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="select">
          Que tipo de espacio ofreces a tus futuros huéspedes?
        </label>
        <select
          id="select"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value=""></option>
          <option value="opcion1">Un alojamiento entero</option>
          <option value="opcion2">Una habitacion privada</option>
          <option value="opcion3">Una habitacion compartida</option>

        </select>
      </div>

      {/* Input de texto */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="direccion">
          Donde se encuentra tu alojamiento?
        </label>
        <input 
          type="text"
          id="dirección"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Botones */}
      <div className="flex w-1/3 space-x-4">
        <CustomButton 
          label="Guardar"
          className="bg-purple-600 hover:bg-purple-700 py-2"
          onClick={() => console.log("holaaa")}
        />

        <CustomButton 
          label="Cancelar"
          className="bg-yellow-400 hover:bg-yellow-500 py-2"
          onClick={() => console.log("holaaa")}
        />
      </div>
    </div>
  );
}