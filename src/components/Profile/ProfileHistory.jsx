import ProfileHistoryItem from "./ProfileHistoryItem";

const ProfileHistory = ({ translations }) => {
  const translationList = translations.map((translation, index) => (
    <ProfileHistoryItem
      key={index + "-" + translation}
      translation={translation}
    />
  ));
  //maps past translations to the profile page

  return (
    <section>
      <h2
        style={{
          fontFamily: "Ink Free",
          alignItems: "center",
          color: "white",
          justifyContent: "center",
          letterSpacing: 4,
          marginLeft: 400,
          marginRight: 400,
          padding: 20,
          borderRadius: 20,
        }}
      >
        Your past translations:
      </h2>

      <p
        style={{
          color: "black",
          fontFamily: "Ink Free",
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "goldenrod",
          marginLeft: 400,
          marginRight: 400,
        }}
      >
        {translationList}
      </p>
    </section>
  );
};

export default ProfileHistory;
