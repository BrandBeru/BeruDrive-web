import { useContext } from 'react'
import {ImMenu} from 'react-icons/im'
import { Context } from '../Context'

const MenuButton = () => {
    const {menuHidden, setMenuHidden} = useContext(Context)
    return (
        <button
        className='absolute bg-gray-700 p-2 flex flex-row gap-2 items-center text-zinc-300 rounded-lg hover:bg-gray-400 hover:text-zinc-600 duration-500 left-0 top-0 m-3'
         onClick={() => setMenuHidden(!menuHidden)}
         > <ImMenu /> </button>
    )
}

export {MenuButton}