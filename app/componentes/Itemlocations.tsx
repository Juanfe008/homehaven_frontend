import Image from "next/image"

const Itemlocations = ({ rutaImagen = "", altImagen = "default alt text" }) => {
  return (
    <div className="cursor-pointer group relative">
      <div className="relative overflow-hidden w-full h-64 rounded-lg">
        <Image
          fill
          src={rutaImagen}
          alt={altImagen}
          sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
          className="object-cover transition-all duration-300 group-hover:scale-110 group-hover:blur-sm h-full w-full"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-white text-xl font-bold">{altImagen}</p>
        </div>
      </div>
    </div>
  )
}

export default Itemlocations