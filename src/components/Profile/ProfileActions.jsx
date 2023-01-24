import { Link } from "react-router-dom"
import { storageDelete } from "../../utils/storage"
import { useUser } from "../../context/UserContext"
import { STORAGE_KEY_USER } from "../../const/StorageKeys";

const ProfileActions = () => {

    const { setUser } = useUser()

    const handleLogOut = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    return (
        <ul>
            <li><Link to="/translations">Translations</Link></li>
            <li><button>Clear History</button></li>
            <li><button onClick={handleLogOut}>Log Out</button></li>
        </ul>
    )
}

export default ProfileActions;