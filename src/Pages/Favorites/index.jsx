import { GridContainer } from "../../componenets/GridContainer"
import { Layout } from "../../componenets/Layout"
import { Recent } from "../../componenets/Recent"
import { Searcher } from "../../componenets/Searcher"

const Favorites = () => {
    return (
        <Layout>
            <div className=" w-full max-w-screen-xl flex flex-col items-center">
                <span className="text-center font-bold text-gray-700 m-5">Favoritos</span>
                <GridContainer favorites={true} all={true} />
            </div>
        </Layout>
    )
}

export { Favorites }