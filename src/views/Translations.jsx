import withAuth from "../hoc/withAuth";
import TranslationButton from "../components/Translations/TranslationButton"
import TranslationForm from "../components/Translations/TranslationForm";
import { useUser } from '../context/UserContext';
import { addTranslation } from "../api/translation";

const TRANSLATIONS = [
    {
        id:1,
        name: "a",
        image: "img/a.png"
    },
    {
        id:2,
        name: "b",
        image: "img/b.png"
    },
    {
        id:3,
        name: "c",
        image: "img/c.png"
    },
    {
        id:4,
        name: "d",
        image: "img/d.png"
    },
    {
        id:5,
        name: "e",
        image: "img/e.png"
    },
    {
        id: 6,
        name: "f",
        image: "img/f.png"
    },
    {
        id:7,
        name: "g",
        image: "img/g.png"
    },
    {
        id:8,
        name: "h",
        image: "img/h.png"
    },
    {
        id:9,
        name: "i",
        image: "img/i.png"
    },
    {
        id:10,
        name: "j",
        image: "img/j.png"
    },
    {
        id:11,
        name: "k",
        image: "img/k.png"
    },
    {
        id:12,
        name: "l",
        image: "img/l.png"
    },
    {
        id:13,
        name: "m",
        image: "img/m.png"
    },    {
        id:14,
        name: "n",
        image: "img/n.png"
    },    {
        id:15,
        name: "o",
        image: "img/o.png"
    },    {
        id:16,
        name: "p",
        image: "img/cp.png"
    },    {
        id:17,
        name: "q",
        image: "img/q.png"
    },    {
        id:18,
        name: "r",
        image: "img/r.png"
    },    {
        id:19,
        name: "s",
        image: "img/s.png"
    },
    {
        id:20,
        name: "t",
        image: "img/t.png"
    },    {
        id:21,
        name: "u",
        image: "img/u.png"
    },    {
        id:22,
        name: "v",
        image: "img/v.png"
    },    {
        id:23,
        name: "w",
        image: "img/w.png"
    },    {
        id:24,
        name: "x",
        image: "img/x.png"
    },    {
        id:25,
        name: "y",
        image: "img/y.png"
    },     {
        id:26,
        name: "z",
        image: "img/z.png"
    },
]

const Translations = () => {

    const { user } = useUser()

    const handleTranslationClick = async (wantedTranslation) => {
        const translation = wantedTranslation;

        const [error, result] = await addTranslation(user, translation)
    
        console.log('error', error)
        console.log('result', result)    
    }


    return (
        <>
        <h1>Translations</h1>
        <section id="wanted-translation">
            <TranslationButton name="a" image="img/a.png" key="a"/>
        </section>
        <section id="wanted-translation">
            <TranslationForm onEvent= { handleTranslationClick}/>
        </section>
        </>

    )
}

export default withAuth(Translations);