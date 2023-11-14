import { useContext } from "react"
import { Context } from "../Context"

const Searcher = () => {
    const {setSearchText} = useContext(Context)
    return (
        <div className="flex items-center justify-center self-center">
            <input
                className="p-3 w-80 rounded-lg border-b-2 border-cyan-800 text-gray-800 font-semibold outline-none hover:border-cyan-500 duration-300"
                placeholder="Seacrh in Drive" 
                onChange={(event) => setSearchText(event.target.value)}
                />
        </div>
    )
}

export { Searcher }