import { Google } from "../../componenets/Google"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { MenuButton } from "../../componenets/MenuButton"
import { useContext } from "react"
import { Context } from "../Context"


const NavBar = () => {
    const {CLIENT_ID} = useContext(Context)
    return (
        <div className="">
            <MenuButton />
                <GoogleOAuthProvider clientId={CLIENT_ID}>
                    <Google />
                </GoogleOAuthProvider>
        </div>
    )
}

export {NavBar}