import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useContext, useState } from "react";
import { Context } from "../Context";
import { FaGoogleDrive } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

const Google = () => {
    const { setGoogleCredential, listFiles, setElements } = useContext(Context)
    const [auth, setAuth] = useState(false)

    const googleSuccess = useGoogleLogin({
        onSuccess: token => {
            setGoogleCredential(token)
            setAuth(true)
        }
    })
    const close = () => {
        googleLogout()
        setElements([])
        setAuth(false)
    }

    return (
        <button
            onClick={!auth ? googleSuccess : close}
            className="absolute bg-cyan-700 p-2 flex flex-row gap-2 items-center text-zinc-300 rounded-lg hover:bg-cyan-600 hover:text-zinc-600 duration-500 right-0 top-0 m-3"
        > {!auth ? <FaGoogleDrive /> : <BiLogOut />} Google Drive</button>
    )
}

export { Google }