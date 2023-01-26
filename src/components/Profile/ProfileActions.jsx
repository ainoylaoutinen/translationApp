import { Link } from "react-router-dom"
import { storageDelete, storageSave } from "../../utils/storage"
import { useUser } from "../../context/UserContext"
import { STORAGE_KEY_USER } from "../../const/StorageKeys";
import { clearTranslationHistory } from "../../api/translation"

const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogOut = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistory = async () => {
        if (!window.confirm('Are you sure?\nThis cannot be undone')) {
            return
    }

    const [ clearError ] = await clearTranslationHistory(user.id)

    if (clearError !== null) {
        return
    }

    const updatedUser = {
        ...user,
        translations: []
    }
    storageSave(updatedUser)
    setUser(updatedUser)
}

    return (
        <section>
        <button onClick={handleClearHistory}
        style={{ backgroundColor: 'goldenrod', fontFamily:'Arial', fontSize: 'small', padding: 20, marginRight: 20}}>Clear History</button>
        <button onClick={handleLogOut}  
        style={{ backgroundColor:'goldenrod', fontFamily:'Arial', fontSize: 'small', padding: 20}}>Log Out</button>
        </section>
    )
}

export default ProfileActions;