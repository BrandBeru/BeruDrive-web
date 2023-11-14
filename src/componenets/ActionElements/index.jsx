import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { BiEditAlt } from "react-icons/bi"
import { BsDownload } from "react-icons/bs"
import { MdDelete } from "react-icons/md"

import { useContext } from "react"
import { Context } from "../Context"

const ActionElements = ({ element }) => {
    const { deleteFile, setOpenEditor, setItem, download, star } = useContext(Context)
    const actionStyle = "cursor-pointer hover:text-cyan-900 m-0 p-0 duration-300 "

    const edit = () => {
        setItem(element)
        setOpenEditor(true)
    }
    return (
        <div className="bg-gray-400 flex flex-row p-2 gap-2 rounded-lg opacity-50 duration-300 hover:opacity-100">
                <span className={actionStyle} onClick={() => deleteFile(element.id)}>{<MdDelete />}</span>
                <span className={actionStyle} onClick={() => edit()}>{<BiEditAlt />}</span>
                <span className={actionStyle} onClick={() => download(element.id, element.name)}>{<BsDownload />}</span>
                <span className={actionStyle} onClick={() => star(element.id, !element.starred)}>{
                    element.starred ? <AiFillStar /> : <AiOutlineStar />
                }</span>
            </div>
        
    )
}

export { ActionElements }