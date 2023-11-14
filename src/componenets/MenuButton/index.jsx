import { useContext } from 'react'
import {ImMenu} from 'react-icons/im'
import { Context } from '../Context'

const MenuButton = () => {
    const {menuHidden, setMenuHidden} = useContext(Context)
    return (
        <button
        className='self-start place-self-start bg-slate-100 p-2 flex flex-row gap-2 items-center text-zinc-500 rounded-lg hover:bg-slate-300 hover:text-zinc-600 duration-500 left-0 top-0 m-3'
         onClick={() => setMenuHidden(!menuHidden)}
         > <ImMenu /> </button>
    )
}

export {MenuButton}