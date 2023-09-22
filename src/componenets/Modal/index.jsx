import { useContext } from "react"
import { createPortal } from "react-dom"
import { Context } from "../Context"

const Modal = ({children}) => {
    const {openModal} = useContext(Context)
    return openModal ? createPortal(
        <div className="fixed bg-gray-800/70 flex justify-center items-center top-0 left-0 right-0 bottom-0 duration-500 transition-all">
            {children}
        </div>,
        document.getElementById('editor')
    ) : ""
}

export {Modal} 