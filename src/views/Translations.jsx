import withAuth from "../hoc/withAuth";
import TranslationForm from "../components/Translations/TranslationForm";
import { useUser } from "../context/UserContext";
import { addTranslation } from "../api/translation";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/StorageKeys";
import { useState } from "react";

const Translations = () => {
  const [result, setResult] = useState("");

  const { user, setUser } = useUser();

  const handleTranslationClick = async (wantedTranslation) => {
    const translation = wantedTranslation;

    const [error, updatedUser] = await addTranslation(user, translation);
    if (error !== null) {
      return;
    }

    //keep UI state and server state in sync
    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);

    setResult(wantedTranslation);

    console.log("error", error);
    console.log("updated user", updatedUser);
    console.log("result:", result);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url(/img/backgreound3.png)",
          height: 900,
        }}
      >
        <h1
          style={{
            fontFamily: "Ink Free",
            alignItems: "center",
            color: "white",
            fontSize: 70,
          }}
        >
          Translations
        </h1>
        <section id="wanted-translation">
          <TranslationForm onEvent={handleTranslationClick} />
          {[...result].map((x, index) => {
            if (x !== " ") {
              return <img key={index} src={"img/" + x + ".png"} alt="Sign language signs"/>;
            } else {
              return <br />;
            }
          })}
        </section>
      </div>
    </>
  );
};

export default withAuth(Translations);
