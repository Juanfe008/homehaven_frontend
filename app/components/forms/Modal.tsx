"use client"

import { FaTimes } from "react-icons/fa"
import { useCallback, useEffect, useState } from "react"

interface ModalProps {
    titulo: string
    contenido: React.ReactElement
    abierto: boolean
    cerrar: () => void
}

const Modal: React.FC<ModalProps> = ({titulo, contenido, abierto, cerrar}) => {

    const [showModal, setShowModal] = useState(abierto)

    useEffect(() => {
        setShowModal(abierto)
    }, [abierto])

    const handleClose = useCallback(() => {
        setShowModal(false)
        setTimeout(() => {
            cerrar()
        }, 10)
    }, [cerrar])

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        handleClose()
    }

    if (!abierto) {
        return null
    }

    return (
        <div 
            className="flex items-center justify-center fixed inset-0 z-50 bg-black/60 "
            onClick={handleClickOutside}>
            <div 
                className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto"
                onClick={(e) => e.stopPropagation()}>
                <div className={`translate duration-600 h-full ${showModal ? "translate-y-0 opacity-100" : "traslate-y-full opacity-10"}`}>
                    <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                        
                        <header className="flex items-center p-6 rounded-t justify-center relative border-b">
                            <div 
                                onClick={handleClose}
                                className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer">
                                <FaTimes size={20} className="text-gray-600"/>
                            </div>

                            <h2 className="text-lg font-bold">{titulo}</h2>
                        </header>

                        <section className="p-6 ">
                            {contenido}
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal