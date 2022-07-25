import "./edit.css";
import { Navbar, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

function HomeNavbar(props) {
  return (
    <div>
      <Navbar className="nav" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none nav-link">
              <img
                className="logo2"
                src={require("../../../src/Assets/logo.png")}
                alt="Logo"
              />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeNavbar;
