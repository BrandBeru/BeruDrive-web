import { useContext } from "react"
import { Layout } from "../../componenets/Layout"
import { Context } from "../../componenets/Context"
import { Searcher } from "../../componenets/Searcher"
import { Recent } from "../../componenets/Recent"
import { GridContainer } from "../../componenets/GridContainer"

const All = () => {
    const { CLIENT_ID, googleCredential } = useContext(Context)
    return (
        <Layout>
            <div className="w-full max-w-screen-xl flex flex-col items-center">
                <span className="text-center font-bold text-gray-700 mt-5">Todos los elementos</span>
                <GridContainer favorites={false} all={true} />
            </div>
        </Layout>
    )
}

export {All}