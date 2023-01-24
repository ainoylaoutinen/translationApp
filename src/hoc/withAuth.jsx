import { useUser } from "../context/UserContext"
import { Navigate } from "react-router-dom"

//when no user is logged in, there should be no access to profiles page
//Component, in this case, will be Profile
const withAuth = Component => props => {
    const {user} = useUser()
    if (user !== null) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }

}

export default withAuth