import { useContext, useEffect } from "react"
import { TableElement } from "../TableElement"
import { Context } from "../Context"

const Table = () => {
    const {elements} = useContext(Context)
    return (
        <table className="border-none w-full bg-gray-200 p-10 rounded-2xl text-gray-800">
            <tr className="border-b-2 border-blue-950 m-5 text-gray-950">
                <th>
                    Nombre
                </th>
                <th>
                    Ultima Modificacion
                </th>
                <th>
                    Propietario
                </th>
                <th>
                    Tamaño
                </th>
                <th>
                    
                </th>
            </tr>
            {
                elements?.map((element) => { 
                    return <TableElement element={element} />
                })
            }
        </table>
    )
}

export {Table}