import ProfileHistoryItem from "./ProfileHistoryItem";

const ProfileHistory = ({translations}) => {

    const translationList = translations.map(
        (translation, index) => <ProfileHistoryItem key={index + '-' + translation} translation={translation}/>)
        //maps past translations to the profile page
        //index allows duplicate translations

    return (
        <section>
            <h4>Your past translations</h4>
            <ul>
                {translationList}
            </ul>
        
        </section>
        )
}

export default ProfileHistory;