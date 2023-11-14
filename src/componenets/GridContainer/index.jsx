import { useContext } from "react"
import { Context } from "../Context"
import { Recent } from "../Recent"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { Google } from "../Google"

const GridContainer = ({favorites, all}) => {
    const { CLIENT_ID, googleCredential } = useContext(Context)
    return (
        googleCredential ? <Recent favorites={favorites} all={all} /> : <GoogleOAuthProvider clientId={CLIENT_ID}><Google /></GoogleOAuthProvider>
    )
}

export {GridContainer}