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
    storageSave(STORAGE_KEY_USER, updatedUser)
    setUser(updatedUser)
}

    return (
        <section>
        <button onClick={handleClearHistory}
        style={{ backgroundColor: 'transparent', border: 'none', fontFamily:'Rockwell', fontSize: 'x-large', padding: 20, marginRight: 20}}>Clear History</button>
        <button onClick={handleLogOut}  
        style={{ backgroundColor: 'transparent', border: 'none', fontFamily:'Rockwell', fontSize: 'x-large', padding: 20}}>Log Out</button>
        </section>
    )
}

export default ProfileActions;