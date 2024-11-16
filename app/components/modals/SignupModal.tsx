"use client"

import Modal from "./Modal"
import useSignupModal from "@/app/hooks/useSignupModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"
import { useState } from "react"

const SignupModal = () => {

    const SignupModal = useSignupModal();
    const LoginModal = useLoginModal();
    const [alerta, setAlerta] = useState(false);
    const [errorRespuesta, setErrorRespuesta] = useState(false);
    const [victoria, setVictoria] = useState(false);

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

    const registrar = () => {
        const info = { usuario: user, correo: email, contraseña: pass };

        if (pass !== pass2) {
            setAlerta(true);
            setErrorRespuesta(false);
            return;
        }

        fetch('http://localhost:8000/api/v1/usuarios/', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                setUser('');
                setEmail('');
                setPass('');
                setPass2('');
                setVictoria(true);
                setAlerta(false);
                setErrorRespuesta(false);

                //SignupModal.close();
                //LoginModal.open();
            } else {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }
        })
        .catch(() => {
            setErrorRespuesta(true);
            setAlerta(false);
        });
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

                {alerta &&
                    <div className="p-4 bg-red-500 text-white rounded-xl opacity-80 ">
                        Error: Las contraseñas no coinciden
                    </div>
                }

                {errorRespuesta &&
                    <div className="p-4 bg-red-500 text-white rounded-xl opacity-80 ">
                        Error: Algo salió mal, intentalo de nuevo
                    </div>
                }

                {victoria &&
                    <div className="p-4 bg-green-500 text-white rounded-xl opacity-80 ">
                        Datos guardados con exito
                    </div>
                }

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