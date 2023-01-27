import { useUser } from "../../context/UserContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  const { user } = useUser(); //if user is not logged in, do not display translations and profile page

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontFamily: "MV Boli", fontSize: 20 }}
          >
            Lost in Translation
          </Navbar.Brand>
          {user !== null && (
            <Nav className="me-auto">
              <Nav.Link href="/translations" style={{ fontFamily: "MV Boli" }}>
                Translate
              </Nav.Link>
              <Nav.Link href="/profile" style={{ fontFamily: "MV Boli" }}>
                Profile
              </Nav.Link>
              <span
                class="navbar-text"
                style={{
                  marginLeft: 700,
                  fontFamily: "Lucida Sans Typewriter",
                  fontSize: 20,
                }}
              >
                {user.username}
              </span>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
