import { NavLink } from "react-router-dom";

import { AiOutlineCaretLeft } from 'react-icons/ai'
import { useContext, useState } from "react";
import { Context } from "../Context";

import {FilePicker} from 'react-file-picker'

const NavMenu = () => {
    const liStyle = 'p-3 duration-500 hover:bg-gray-300 cursor-pointer rounded-lg text-black font-semibold w-full h-full';

    const { menuHidden, setMenuHidden,handleFileChange } = useContext(Context)
    return (
        <nav className={menuHidden ? "hidden" : "flex flex-col justify-between fixed items-center z-10 h-full py-5 px-5 text-sm font-light top-0 bg-slate-200"}>
            <ul className="flex flex-col items-center gap-5 w-full">
                <FilePicker
                    
                   onChange={handleFileChange}
                   onError={errMsg => console.error(errMsg)}
                >
                    <button className="bg-white p-4 rounded-lg duration-500 font-semibold hover:drop-shadow-lg">Nuevo</button>
                </FilePicker>

                <li className={liStyle}>
                    <NavLink to='/'>
                        Mi unidad
                    </NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink to='/all'>
                        Recientes
                    </NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink to='favorites'>
                        Destacados
                    </NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink to='spam'>
                        Spam
                    </NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink to='bin'>
                        Papelera
                    </NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink to='storage'>
                        Almacenamiento
                    </NavLink>
                </li>

            </ul>

            <button className="absolute right-0 top-2/4 font-bold text-xl" onClick={() => setMenuHidden(!menuHidden)}> <AiOutlineCaretLeft /> </button>
        </nav>
    )
}

export { NavMenu }