import { Layout } from "../../componenets/Layout"
import { Recent } from "../../componenets/All"
import { Searcher } from "../../componenets/Searcher"

const Favorites = () => {
    return (
        <Layout>
            <div className=" w-full max-w-screen-xl flex flex-col items-center">
                <Searcher />
                <span className="text-center font-bold text-gray-700 m-5">Favoritos</span>
                <Recent favorites={true} all={true}/>
            </div>
        </Layout>
    )
}

export { Favorites }