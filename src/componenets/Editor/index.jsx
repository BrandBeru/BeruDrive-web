import { useContext, useState } from "react"
import { Context } from "../Context"

import {GrFormClose} from 'react-icons/gr'

const Editor = () => {
    const {setOpenModal, item, rename} = useContext(Context)
    const [name, setName] = useState(item.name)
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setName(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        rename(item.id, name)
        setOpenModal(false)
    }
    return (
        <form className="w-full h-full max-h-96 max-w-lg bg-gray-200 flex flex-col justify-center items-center p-20 rounded-lg" onSubmit={onSubmit}>
            <span className="text-center w-full font-bold text-lg uppercase text-gray-800">Nuevo nombre del archivo</span>
            <div className="mt-20 flex gap-3 w-full">
                <input placeholder={item.name} className="outline-none bg-transparent hover:border-b-gray-800 text-gray-800 text-lg w-full p-3 border-0 border-transparent border-b-2 border-b-gray-600 duration-500 " onChange={onChange} value={name} />
                <button className="cursor-pointer inline-block p-3 bg-slate-800 rounded-lg hover:bg-slate-900 duration-500 border-none text-gray-100 w-32" type="submit">Hecho</button>
            </div>
            <button className="cursor-pointer inline-block border-none self-end font-semibold text-2xl p-2 bg-red-500 hover:drop-shadow-lg shadow-red-700 w-32 rounded-lg duration-500 mt-5 hover:bg-red-600 text-gray-100 font-sans" type="cancel" onClick={onCancel}> x </button>
        </form>
    )
}

export {Editor}