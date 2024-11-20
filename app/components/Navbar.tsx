"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import useLoginModal from "../hooks/useLoginModal";
import useSignupModal from "../hooks/useSignupModal";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const LoginModal = useLoginModal();
  const SignupModal = useSignupModal();

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (menuRef.current && 
        !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", clickOutside)

    return () => {
      document.removeEventListener("mousedown", clickOutside)
    }
  }, [])

  return (   
    <nav className="bg-amber-300 fixed z-10 w-full py-2">
      <div className="max-w-[1500px] mx-auto px-8 flex justify-between items-center">
        <Image
          src="/images/homeheaven.jpg"
          className="rounded-lg cursor-pointer"
          //onClick={() => goTo('/')}
          alt="logo"
          width={100}
          height={100}
        />
        
        <div 
          ref={menuRef} 
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src="/images/login.png"
            alt="login"
            width={50}
            height={50}
          />

          {menuOpen && (
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