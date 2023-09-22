import { Layout } from "../../componenets/Layout"
import { Table } from "../../componenets/Table"
import { Context } from "../../componenets/Context"
import { useContext } from "react"
import { Recent } from "../../componenets/All"
import { Searcher } from "../../componenets/Searcher"

const MyUnity = () => {
    const { CLIENT_ID, googleCredential } = useContext(Context)
    return (
        <Layout>
            <div className="w-full max-w-screen-xl flex flex-col items-center">
                <Searcher />
                <span className="text-center font-bold text-gray-700">Recientes</span>
                {googleCredential ? <Recent favorites={false} all={false} /> : "Sign in First to show elements"}
                <Table />
            </div>
        </Layout>
    )
}

export { MyUnity }