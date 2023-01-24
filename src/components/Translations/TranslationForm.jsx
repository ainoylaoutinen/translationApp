import { useForm } from "react-hook-form";

const TranslationForm = ({onEvent}) => {

    const { register, handleSubmit } = useForm()

    const onSubmit = ({wantedTranslation}) => {
        onEvent(wantedTranslation)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="wanted-translation">wanted translation</label>
                <input type="text" {...register('wantedTranslation')}/>
            </fieldset>

            <button type="submit">Translate</button>

        </form>
    )

}

export default TranslationForm;