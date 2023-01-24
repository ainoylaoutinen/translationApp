import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {

    const { user} = useUser()
    //if user is not logged in, do not display translations and profile page
    return (
        <nav>
            <ul>
                <li>Translations App</li>
            </ul>

            { user !== null &&

            <ul> 
                <li>
                    <NavLink to="/translations">Translations</NavLink> 
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
            }

        </nav>
    )
}

export default Navbar