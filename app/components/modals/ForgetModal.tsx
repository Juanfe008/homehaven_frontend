"use client"

import Modal from "../forms/Modal"
import useForgetModal from "@/app/hooks/useForgetModal"
import CustomButton from "../forms/CustomButton"
import useLoginModal from "@/app/hooks/useLoginModal"
import useSignupModal from "@/app/hooks/useSignupModal"

const ForgetModal = () => {

    const ForgetModal = useForgetModal()
    const LoginModal = useLoginModal()
    const SignupModal = useSignupModal()

    const content = (
        <>
            <form className="space-y-4">
                <input 
                    type="email" 
                    placeholder="correo"
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-cyan-500 rounded-xl"
                />

                <div className="p-4 bg-purple-500 text-white rounded-xl opacity-80 ">Error</div>

                <CustomButton 
                    label="Continuar"
                    className="bg-purple-600 hover:bg-purple-700 py-4"
                    onClick={() => console.log("holaaa")}
                />

                <div className="w-full flex justify-evenly border rounded-lg text-purple-500 py-1">
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            ForgetModal.close()
                            LoginModal.open()}}>Ingresar</a>
                    
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            ForgetModal.close()
                            SignupModal.open()}}>Crea tu cuenta</a>
                </div>

            </form>
        </>
    )

    return (
        <Modal 
            abierto={ForgetModal.isOpen}
            cerrar={ForgetModal.close}
            contenido={content}
            titulo="Olvidaste tu contraseña?"
        />
    )
}

export default ForgetModal