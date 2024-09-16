"use client"

import Modal from "./Modal"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"
import useForgetModal from "@/app/hooks/useForgetModal"
import useSignupModal from "@/app/hooks/useSignupModal"

const LoginModal = () => {

    const LoginModal = useLoginModal()
    const ForgetModal = useForgetModal()
    const SignupModal = useSignupModal()

    const content = (
        <>
            <form className="space-y-4">
                <input 
                    type="email" 
                    placeholder="correo"
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-blue-800 rounded-xl"
                />
                <input 
                    type="password" 
                    placeholder="contraseña"
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-blue-800 rounded-xl"
                />

                <div className="p-4 bg-purple-500 text-white rounded-xl opacity-80 ">Error</div>

                <CustomButton 
                    label="Continuar"
                    onClick={() => console.log("holaaa")}
                />

                <div className="w-full flex justify-evenly border rounded-lg text-cyan-500 py-1">
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            LoginModal.close()
                            ForgetModal.open()}}>Olvidaste tu contraseña</a>

                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            LoginModal.close()
                            SignupModal.open()}}>Crea tu cuenta</a>
                </div>
    
            </form>
        </>
    )

    return (
        <Modal 
            abierto={LoginModal.isOpen}
            cerrar={LoginModal.close}
            contenido={content}
            titulo="Ingresar"
        />
    )
}

export default LoginModal