import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHistory from "../components/Profile/ProfileHistory";
import withAuth from "../hoc/withAuth";
import { useUser } from "../context/UserContext"
import { useEffect } from "react";
import { userById } from "../api/user"
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/StorageKeys";

const Profile = () => {

    const { user, setUser } = useUser()

   useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id)
            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }

        //findUser()
        //useEffect cant be async so we have to break it up
    },[ user.id, setUser])

    return (
        <>
        <div style={{ 
            backgroundImage: "url(/img/backgreound3.png)", height: 553, 
         }}>
        <h1 style={{
        fontSize: 50,
        color: "white",
        fontFamily:'Ink Free',
        fontWeight: 'bold',
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: 4,
        marginLeft: 200,
        marginRight: 200,
        padding: 20,
        borderRadius: 20}}>{user.username}'s Profile</h1>
        <ProfileActions/>
        <ProfileHistory translations={user.translations}/>
        </div>
        </>

    )
}

export default withAuth(Profile);