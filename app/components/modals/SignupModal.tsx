"use client"

import Modal from "../forms/Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";
import Swal from 'sweetalert2';

const SignupModal = () => {
    const SignupModal = useSignupModal();
    const LoginModal = useLoginModal();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

    const registrar = () => {
        const info = { usuario: user, correo: email, contraseña: pass };

        if (!user || !email || !pass || !pass2) {
            Swal.fire({
                icon: 'error',
                title: '¡Debes llenar todos los campos requeridos!',
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 3000,
                background: '#ff0000',
                color: 'white',
                iconColor: 'white'
            });
        } else {
            if (pass !== pass2) {
                Swal.fire({
                    icon: 'error',
                    title: '¡Las contraseñas deben coincidir!',toast: true,
                    position: 'top-right',
                    showConfirmButton: false,
                    timer: 3000,
                    background: '#ff0000',
                    color: 'white',
                    iconColor: 'white'
                });
                return;
            }

            fetch('http://localhost:8000/api/v1/usuarios/', {
                method: 'POST',
                body: JSON.stringify(info),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Los datos fueron guardados con exito!',
                        toast: true,
                        position: 'top-right',
                        showConfirmButton: false,
                        timer: 3000,
                        background: '#00ff00',
                        color: 'white',
                        iconColor: 'white'
                    });
    
                    //SignupModal.close();
                    //LoginModal.open();
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: '¡Ocurrio algo inesperado, intentalo de nuevo!',
                    toast: true,
                    position: 'top-right',
                    showConfirmButton: false,
                    timer: 3000,
                    background: '#ff0000',
                    color: 'white',
                    iconColor: 'white'
                });
            });
        }
    }

    const content = (
        <>
            <form className="space-y-4">
                <input 
                    type="text" 
                    placeholder="usuario"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-cyan-500 rounded-xl"
                />
                <input 
                    type="email" 
                    placeholder="correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-cyan-500 rounded-xl"
                />
                <input 
                    type="password" 
                    placeholder="contraseña"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-cyan-500 rounded-xl"
                />
                <input 
                    type="password" 
                    placeholder="confirmar contraseña"
                    value={pass2}
                    onChange={(e) => setPass2(e.target.value)}
                    className="w-full h-[54px] px-4 border border-gray-100 focus:outline-none focus:border-2 focus:border-cyan-500 rounded-xl"
                />

                <CustomButton 
                    label="Continuar"
                    className="bg-purple-600 hover:bg-purple-700 py-4"
                    onClick={() => registrar()}
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