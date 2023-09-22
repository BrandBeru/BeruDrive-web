import { useContext, useState } from "react"
import { MdDelete } from "react-icons/md"
import { BiEditAlt } from 'react-icons/bi'
import { BsDownload } from 'react-icons/bs'
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { Context } from "../Context"

const TableElement = ({ element }) => {
    const activeStyle = 'underline color-black-400 underline-offset-4 cursor-pointer'
    const itemStyle = 'p-5 text-center'
    const iconStyle = "object-cover w-5 h-5"
    const actionStyle = "cursor-pointer hover:text-blue-500 m-0 p-0 text-xl duration-300"

    const {deleteFile, setItem, setOpenModal, download, star} = useContext(Context)

    const edit = () => {
        setItem(element)
        setOpenModal(true)
    }

    return (
        <tr className="border-b-2 border-blue-950 items-center">
            <td className={itemStyle}>
                <div className="flex flex-row gap-3 items-center h-full">
                    <img className={iconStyle} src={element.iconLink}></img>
                    {element.name}
                </div>
            </td>
            <td className={itemStyle}>
                {element.modifiedTime}
            </td>
            <td className={itemStyle}>
                <img className={iconStyle} src={element.owners.photoLink}></img>
                {element.owners[0].displayName}
            </td>
            <td className={itemStyle}>
                {(Math.ceil((element.size/1000)))} KB
            </td>
            <td className={itemStyle}>
                <div className="h-full flex flex-row gap-3 items-center text-center">
                    <span className={actionStyle} onClick={() => {deleteFile(element.id)}}>{<MdDelete />}</span>
                    <span className={actionStyle} onClick={() => edit()}>{<BiEditAlt />}</span>
                    <span className={actionStyle} onClick={() => download(element.id, element.name)}>{<BsDownload />}</span>
                    <span className={actionStyle} onClick={() => star(element.id, !element.starred)}>{
                        element.starred ? <AiFillStar /> : <AiOutlineStar />
                    }</span>
                </div>
            </td>
        </tr>
    )
}

export { TableElement }