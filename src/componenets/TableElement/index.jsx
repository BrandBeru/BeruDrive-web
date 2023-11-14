
import { ActionElements } from "../ActionElements"

const TableElement = ({ element }) => {
    const itemStyle = 'p-5 text-center'
    const iconStyle = "object-cover w-5 h-5"

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
                    <ActionElements element={element} />
                </div>
            </td>
        </tr>
    )
}

export { TableElement }