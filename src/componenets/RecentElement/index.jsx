
import { ActionElements } from "../ActionElements"

const RecentElements = ({ element }) => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{element.modifiedTime}</span>
                <img className="w-full h-full object-cover rounded-lg" src={element.thumbnailLink}></img>
                <img src={element.iconLink} className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1"></img>
                <div className={"absolute left-0 top-0 flex flex-row h-full w-full items-center justify-center text-cyan-600 gap-2 text-xl"}>
                    <ActionElements element={element} />
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-xs font-bold w-full">{element.name}</span>
            </p>
        </div>
    )
}

export { RecentElements }