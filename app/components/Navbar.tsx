import Image from "next/image";

const Navbar = () => {
  return (
    <main>    
      <nav className="bg-tipoyellow fixed border-b z-10 w-full py-4">
        <div className="max-w-[1500px] mx-auto px-8 flex justify-between items-center">
          <h1>
            Home Haven
          </h1>
          <div className="p-1.5 border border-black inline-block relative rounded-full">
            <button className="flex items-center justify-between w-12">
              <Image 
                src="/images/bars.png"
                alt="bars"
                width={20}
                height={20}
              />
              
              <Image
                src="/images/login.png"
                alt="login"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
      </nav>
    </main>
  )
}

export default Navbar;