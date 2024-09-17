import Link from 'next/link'
import PropertiesCard from './PropertiesCard'

const Properties = () => {
  const properties = [
    { 
      id: 1, 
      imageSrc: [
        "/images/cali.jpeg",
        "/images/popayan.jpeg",
        "/images/medellin.jpg"
      ], 
      imageAlt: "Cali", 
      name: 'Example', 
      price: 50, 
      rating: 5
    },
  ]

  return (
    <main className="w-full px-6">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {properties.map((prop) => (
            <PropertiesCard
              key={prop.id}
              id={prop.id}  
              imageSrc={prop.imageSrc}
              imageAlt={prop.imageAlt}
              name={prop.name}
              price={prop.price}
              rating={prop.rating}
            />
        ))}
      </div>
    </main>
  )
}

export default Properties