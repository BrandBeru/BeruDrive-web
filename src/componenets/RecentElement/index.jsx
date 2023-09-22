import { useContext, useState } from "react"
import { AiOutlineStar,AiFillStar } from "react-icons/ai"
import { BiEditAlt } from "react-icons/bi"
import { BsDownload } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { Context } from "../Context"

const RecentElements = ({element}) => {
    const {deleteFile,setOpenModal, setItem, download,star} = useContext(Context)
    const actionStyle = "cursor-pointer hover:text-cyan-900 m-0 p-0 duration-300 "

    const edit = () => {
        setItem(element)
        setOpenModal(true)
    }
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{element.modifiedTime}</span>
                <img className="w-full h-full object-cover rounded-lg" src={element.thumbnailLink}></img>
                <img src={element.iconLink} className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1"></img>
                <div className={"absolute left-0 top-0 flex flex-row h-full w-full items-center justify-center text-cyan-600 gap-2 text-xl"}>
                    <div className="bg-gray-400 flex flex-row p-2 gap-2 rounded-lg opacity-50 duration-300 hover:opacity-100">
                        <span className={actionStyle} onClick={() => deleteFile(element.id)}>{<MdDelete />}</span>
                        <span className={actionStyle} onClick={() => edit()}>{<BiEditAlt />}</span>
                        <span className={actionStyle} onClick={() => download(element.id, element.name)}>{<BsDownload />}</span>
                        <span className={actionStyle} onClick={() => star(element.id, !element.starred)}>{
                            element.starred ? <AiFillStar /> : <AiOutlineStar />
                        }</span>
                    </div>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-xs font-bold w-full">{element.name}</span>
            </p>
        </div>
    )
}

export { RecentElements }