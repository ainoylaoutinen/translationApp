import { useForm } from "react-hook-form";

const TranslationForm = ({ onEvent }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ wantedTranslation }) => {
    onEvent(wantedTranslation);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label
          htmlFor="wanted-translation"
          style={{
            fontFamily: "Ink Free",
            alignItems: "center",
            color: "white",
            fontSize: 30,
          }}
        >
          wanted translation:
        </label>
        <input type="text" {...register("wantedTranslation")} />
      </fieldset>

      <button
        type="submit"
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontFamily: "Rockwell",
          fontSize: "x-large",
          padding: 20,
          marginRight: 20,
        }}
      >
        Translate
      </button>
    </form>
  );
};

export default TranslationForm;
