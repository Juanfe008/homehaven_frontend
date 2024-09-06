import Itemlocations from "./Itemlocations";

const Locations = () => {

  const locations = [
    { rutaImagen: "/images/cali.jpeg", altImagen: "CALI" },
    { rutaImagen: "/images/medellin.jpg", altImagen: "MEDELLÍN" },
    { rutaImagen: "/images/popayan.jpeg", altImagen: "POPAYÁN" },
    { rutaImagen: "/images/cartagena.jpeg", altImagen: "CARTAGENA" },
    { rutaImagen: "/images/bogota.jpeg", altImagen: "BOGOTÁ" },
    //{ rutaImagen: "/images/ipiales.jpeg", altImagen: "IPIALES" }
  ];

  return (
    <main className="w-full px-6">
      <h1>Mejores destinos turisticos en Colombia</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {locations.map((loc, index) => (
          <Itemlocations key={index} rutaImagen={loc.rutaImagen} altImagen={loc.altImagen}></Itemlocations>
        ))}
      </div>
    </main>
  )
}

export default Locations;