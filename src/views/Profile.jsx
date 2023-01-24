import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
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

        findUser()
        //useEffect cant be async so we have to break it up
    },[ user.id, setUser])

    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={ user.username }/>
        <ProfileActions/>
        <ProfileHistory translations={user.translations}/>

        </>

    )
}

export default withAuth(Profile);