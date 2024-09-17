import ItemLocations from './ItemLocations'

const Locations = () => {
  const locations = [
    { id: 1, imageSrc: "/images/cali.jpeg", imageAlt: "Cali"},
    { id: 2, imageSrc: "/images/medellin.jpg", imageAlt: "Medellín" },
    { id: 3, imageSrc: "/images/popayan.jpeg", imageAlt: "Popayán" },
    { id: 4, imageSrc: "/images/cartagena.jpeg", imageAlt: "Cartagena" },
    { id: 5, imageSrc: "/images/bogota.jpeg", imageAlt: "Bogotá"},
  ]

  return (
    <main className="w-full px-6">
      <h1>Mejores destinos turísticos en Colombia</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {locations.map((loc) => (
            <ItemLocations
              imageSrc={loc.imageSrc}
              imageAlt={loc.imageAlt}
            />
        ))}
      </div>
    </main>
  )
}

export default Locations