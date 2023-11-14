import { useGoogleLogin } from "@react-oauth/google";
import { useContext, useState } from "react";
import { Context } from "../Context";
import { FaGoogleDrive } from 'react-icons/fa'

const Google = () => {
    const { setGoogleCredential,userInfo, setOpenUser, googleCredential} = useContext(Context)
    

    const googleSuccess = useGoogleLogin({
        onSuccess: token => {
            console.log(token)
            setGoogleCredential(token)
        }
    })

    return (
        <button
        title="SignIn"
            onClick={!googleCredential ? googleSuccess : () => setOpenUser(true)}
            className="self-center place-self-end justify-self-end p-3 flex flex-row gap-2 items-center bg-slate-100 text-zinc-500 hover:bg-slate-300 hover:text-zinc-600 duration-500 w-14 rounded-full"
        > {!!googleCredential ? <img className="w-16 rounded-full" src={userInfo.user?.photoLink}></img> : <FaGoogleDrive />}</button>
    )
}

export { Google }