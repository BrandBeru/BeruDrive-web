import { useContext } from "react"
import { RecentElements } from "../RecentElement"
import { Context } from "../Context"

const Recent = ({ favorites, all }) => {
    const { recentElements, searchItems, searchText } = useContext(Context)
    return (
        <div className="grid gap-2 grid-cols-4 w-full max-w-screen-lg m-5">
            {
                (!searchText && !all) ? recentElements?.map((element) => {
                    return (element.starred && favorites) || (!favorites) ? <RecentElements element={element} /> : ""
                })
                    :
                    searchItems?.map((element) => {
                        return (element.starred && favorites) || (!favorites) ? <RecentElements element={element} /> : ""
                    })
            }
        </div>
    )
}

export { Recent }