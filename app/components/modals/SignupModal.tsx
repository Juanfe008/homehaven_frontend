"use client"

import Modal from "./Modal"
import useSignupModal from "@/app/hooks/useSignupModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"

const SignupModal = () => {

    const SignupModal = useSignupModal()
    const LoginModal = useLoginModal()

    const content = (
        <>
            <form className="space-y-4">
                <input 
                    type="email" 
                    placeholder="correo"
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-cyan-500 rounded-xl"
                />
                <input 
                    type="password" 
                    placeholder="contraseña"
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-cyan-500 rounded-xl"
                />
                <input 
                    type="password" 
                    placeholder="confirmar contraseña"
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-cyan-500 rounded-xl"
                />

                <div className="p-4 bg-purple-500 text-white rounded-xl opacity-80 ">Error</div>
                <CustomButton 
                    label="Continuar"
                    onClick={() => console.log("holaaa")}
                />

                <div className="w-full border rounded-lg text-purple-500 text-center py-1">
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            SignupModal.close()
                            LoginModal.open()}}>Ingresar</a>
                </div>
            </form>
        </>
    )

    return (
        <Modal 
            abierto={SignupModal.isOpen}
            cerrar={SignupModal.close}
            contenido={content}
            titulo="Registrate"
        />
    )
}

export default SignupModal