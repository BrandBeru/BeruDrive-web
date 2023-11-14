import { Google } from "../../componenets/Google"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { MenuButton } from "../../componenets/MenuButton"
import { useContext } from "react"
import { Context } from "../Context"
import { Searcher } from "../Searcher"


const NavBar = () => {
    const { CLIENT_ID } = useContext(Context)
    return (
        <div className="p-3 flex flex-row w-full justify-between">
            <div className="flex flex-row items-center">
                <span className="text-cyan-800 font-bold text-lg">BeruDrive</span>
                <MenuButton />
            </div>
            <Searcher />
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <Google />
            </GoogleOAuthProvider>
        </div>
    )
}

export { NavBar }