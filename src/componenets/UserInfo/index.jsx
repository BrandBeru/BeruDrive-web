import { useContext } from "react"
import { Context } from "../Context"

import {BiLogOut} from 'react-icons/bi'
import { googleLogout } from "@react-oauth/google"

const UserInfo = () => {
    const { setOpenUser, openUser, userInfo, setElements,setRecentElements,setUserInfo, setGoogleCredential } = useContext(Context)
    const textStyle = 'text-center w-full font-bold text-lg text-gray-800';
    const close = () => {
        setOpenUser(false)
        googleLogout()
        setElements([])
        setRecentElements([])
        setUserInfo([])
        setGoogleCredential('')
    }
    const usage = (userInfo.storageQuota.usage/1073741824).toFixed(2)
    const limit = Math.ceil(userInfo.storageQuota.limit/1073741824)
    return (
        openUser && <form className="w-full h-full max-h-96 max-w-lg bg-gray-200 flex flex-col justify-center items-center p-20 rounded-lg" >
            <span className="text-center w-full font-bold text-lg uppercase text-gray-800">Informacion de usuario</span>
            <div className="m-4 flex flex-col gap-3 w-full items-center justify-center">
                <span className={textStyle}>{userInfo.user.emailAddress}</span>
                <img className="rounded-full" src={userInfo.user.photoLink} ></img>
                <span className={textStyle}>Hola, {userInfo.user.displayName}</span>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">{usage} GB de {limit} GB utilizados</span>
                <progress className=" w-full mb-5 rounded-xl h-2" max={limit} value={usage}></progress>
            </div>
            <button className="cursor-pointer flex flex-row gap-3 items-center justify-center p-3 bg-red-800 rounded-lg hover:bg-red-900 duration-500 border-none text-gray-100 w-32" type="cancel" onClick={close}> <BiLogOut /> Logout </button>
        </form>
    )
}

export { UserInfo }