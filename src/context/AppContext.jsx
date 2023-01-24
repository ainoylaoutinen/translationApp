import UserProvider from "./UserContext";

const AppContext = ({children}) => {

    //in props we will have the children objects; anything rendered in Appcontext
    //to forward back to others?
    return (
        <UserProvider>
        {children}
        </UserProvider>
    )

}

export default AppContext;