import { useContext, useState } from "react";
import { createContext } from "react";
import { STORAGE_KEY_USER } from "../const/StorageKeys"
import { storageRead } from "../utils/storage"

//Context => exposing the value
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) //going to return an object, the user and setUser 
}
//custom hook

const UserProvider = ({children}) => {
    //children from AppContext

    const [ user, setUser ] = useState(storageRead(STORAGE_KEY_USER))

    const state = {
        user, setUser
    }

    return (
        <UserContext.Provider value= {state}>
            {children} 
        </UserContext.Provider>
    )
}

export default UserProvider;

