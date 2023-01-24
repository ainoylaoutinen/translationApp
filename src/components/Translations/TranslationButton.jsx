const TranslationButton = ({name, image}) => {
    return (
        <button>
            <aside>
                <img src={image} alt={name} width="55"></img>
            </aside>
            <section>
                <b>{name}</b>
            </section>


        </button>

    )

}

export default TranslationButton;