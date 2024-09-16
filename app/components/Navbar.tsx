"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import useLoginModal from "../hooks/useLoginModal";
import useSignupModal from "../hooks/useSignupModal";

const Navbar = () => {

  const [menuopen, setmenuopen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const LoginModal = useLoginModal()
  const SignupModal = useSignupModal()

  const togglemenu = () => {
    setmenuopen(!menuopen)
  }

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (menuRef.current && 
        !menuRef.current.contains(event.target as Node)) {
        setmenuopen(false)
      }
    }

    document.addEventListener("mousedown", clickOutside)

    return () => {
      document.removeEventListener("mousedown", clickOutside)
    }
  }, [])

  return (   
    <nav className="bg-tipoyellow fixed border-b z-10 w-full py-4">
      <div className="max-w-[1500px] mx-auto px-8 flex justify-between items-center">
        <h1>
          Home Heaven
        </h1>
        <div 
          ref={menuRef} 
          className="cursor-pointer p-1.5 relative border border-black rounded-full hover:shadow-lg transition-shadow duration-300"
          onClick={togglemenu}
        >
          <div className="flex items-center justify-between w-12">
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
          </div>

          {menuopen && (
            <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-300 rounded-xl shadow-lg py-2">
              <a 
                href="" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                  LoginModal.open()}}>Ingresar</a>

              <a 
                href="" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                  SignupModal.open()}}>Registrarse</a>
            </div>
          )}

        </div>
      </div>
    </nav>
  )
}

export default Navbar;