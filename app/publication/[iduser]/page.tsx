"use client";

import CustomButton from "@/app/components/forms/CustomButton";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Swal from 'sweetalert2';

export default function PublicationPage() {
  // Extract name user
  const params = useParams();
  const id = params.iduser;
  const aldeano = { name: "" + id };
  // Set images
  const inputFile = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // Inputs project
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [tipo, setTipo] = useState('');
  const [espacio, setEspacio] = useState('');
  const [cantidadH, setCantidadH] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const visualImagen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      if (images.length + fileArray.length <= 5) {
        fileArray.forEach((file) => {
          const reader = new FileReader();
          reader.onload = () => {
            setImages((prev) => [...prev, reader.result as string]);
          };
          reader.readAsDataURL(file);
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: '¡Límite de imágenes alcanzado!',
          text: `Puedes agregar hasta 5 imágenes.`,
          toast: true,
          position: 'top-right',
          showConfirmButton: false,
          timer: 3000,
          background: '#FF4D4D',
          color: 'white',
          iconColor: 'white'
        });
      }
    } 
  };

  //async function sendProject(params:type) {}

  const sendProject = () => {
    if (!nombre || !ciudad || !tipo || !espacio || !cantidadH || !descripcion || !precio ) {
      Swal.fire({
        icon: 'error',
        title: '¡Debes llenar todos los campos!',
      });
    } else if (images) {
      Swal.fire({
        icon: 'error',
        title: '¡Debe haber al menos una imagen!',
      });
    } else {
      console.log("Datos envidos al backend:",JSON.stringify({
        nombre: nombre,
        ciudad: ciudad,
        tipo: tipo,
        espacio: espacio,
        cantidad: cantidadH,
        descripcion: descripcion,
        precio: precio,
        imagenes: images
      }))
    }
  }

  return (
      <div className="flex justify-between mx-8 mb-8 gap-4 pt-24">
        <div className="p-8 border border-black bg-white rounded-lg shadow-lg w-2/3">
          <h1 className="text-2xl font-bold mb-4">Hola {aldeano.name}, pon tu anuncio nuevo</h1>

          {/* Input de texto */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="direccion">
              Nombre del alojamiento
            </label>
            <input 
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              id="nombre"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Select */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="select">
              Selecciona el tipo de alojamiento
            </label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option></option>
              <option>Departamento</option>
              <option>Casa</option>
              <option>Alojamientos unicos</option>

            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="select">
              En que ciudad se encuentra tu alojamiento?
            </label>
            <select
              id="ciudad"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option></option>
              <option>Cali</option>
              <option>Medellin</option>
              <option>Popayán</option>
              <option>Cartagena</option>
              <option>Bogotá</option>
              <option>Ipiales</option>
              {/*<option>Nuevo</option>*/}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="select">
              Que tipo de espacio ofreces a tus futuros huéspedes?
            </label>
            <select
              id="espacios"
              value={espacio}
              onChange={(e) => setEspacio(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option></option>
              <option>Un alojamiento entero</option>
              <option>Una habitacion privada</option>
              <option>Una habitacion compartida</option>

            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="direccion">
              Capacidad de huespedes
            </label>
            <input 
              type="number"
              id="cantidad"
              value={cantidadH}
              onChange={(e) => setCantidadH(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="direccion">
              Danos una breve descripción
            </label>
            <input 
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="direccion">
              Precio por cada noche
            </label>
            <input 
              type="text"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botones */}
          <div className="flex w-3/5 space-x-4">
            <CustomButton 
              label="Resetear Campos"
              className="bg-yellow-400 hover:bg-yellow-500 py-2"
              onClick={() => console.log("holaaa")}
            />

            <CustomButton 
              label="Guardar"
              className="bg-purple-600 hover:bg-purple-700 py-2"
              onClick={sendProject}
            />
          </div>

        </div>

        <div className="p-2 border border-black w-1/3 rounded-lg shadow-lg flex flex-col items-center justify-center max-h-96">

          <input
            ref={inputFile}
            className="hidden"
            type="file"
            onChange={visualImagen}
            accept="image/*"
            multiple // Permite seleccionar varias imágenes
          />

          <div className="flex flex-wrap justify-center gap-4">
            {images.map((image, index) => (
              <div 
                onClick={() => setSelectedImage(image)}
                key={index}
                className="cursor-pointer relative border border-gray-300 rounded-lg"
              >
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setImages(images.filter((_, i) => i !== index))}}
                  className="absolute right-0 bg-white rounded-full p-2 group">
                  <FaX className="text-red-500 transition-transform transform group-hover:scale-125" />
                </div>
                <img src={image} alt={`Preview ${index}`} className="max-w-full h-24 w-24 object-cover" />
              </div>
            ))}
          </div>

          {selectedImage && <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt="Ampliada" className="max-w-3xl max-h-3xl rounded-lg" />
          </div>}

          {images.length < 5 && <div
            onClick={() => inputFile.current?.click()}
            className="mt-4 flex justify-center items-center border border-zinc-500 rounded-lg px-4 py-2 cursor-pointer"
          >
            {images.length === 0 ? 'Add photo' : 'Add new photo'}
            <FaPlus className="text-zinc-500 ml-2" />
          </div>}

        </div>
      </div>
  );
}