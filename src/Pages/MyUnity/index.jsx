import { Layout } from "../../componenets/Layout"
import { Table } from "../../componenets/Table"
import { GridContainer } from "../../componenets/GridContainer"

const MyUnity = () => {
    
    return (
        <Layout>
            <div className="w-full max-w-screen-xl flex flex-col items-center">
                <span className="text-center font-bold text-gray-700 mt-5">Recientes</span>
                <GridContainer favorites={false} all={false} />
                <Table />
            </div>
        </Layout>
    )
}

export { MyUnity }