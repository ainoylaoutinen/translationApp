import { useUser } from "../../context/UserContext"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavBar = () => {

    const { user} = useUser()
    //if user is not logged in, do not display translations and profile page
    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">Lost in Translation</Navbar.Brand>
        { user !== null &&
          <Nav className="me-auto">
            <Nav.Link href="/translations">Translate</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        }
        </Container>
        </Navbar>
        </>
    )
}

export default NavBar